import Express from "express";
import ExpressProxy from "express-http-proxy";
import Morgan from "morgan";

export const createProxyServer = (device) => {
  const tryRewriteHostAndPortUrl = (headers, name, targetUrl) => {
    if (headers[name]) {
      try {
        const url = new URL(headers[name]);
        url.hostname = targetUrl.hostname;
        url.port = targetUrl.port;

        headers[name] =
          name === "referer" ? url.toString() : url.toString().slice(0, -1);
      } catch (err) {}
    }
  };

  const app = Express();
  app.use(Morgan("combined"));
  app.use(
    "/",
    ExpressProxy(device.address, {
      parseReqBody: true,
      reqAsBuffer: true,
      reqBodyEncoding: null,
      timeout: 3000,
      proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
        tryRewriteHostAndPortUrl(
          proxyReqOpts.headers,
          "referer",
          device.address,
        );
        tryRewriteHostAndPortUrl(
          proxyReqOpts.headers,
          "origin",
          device.address,
        );

        for (let i = 0; i < srcReq.rawHeaders.length; i += 2) {
          const headerCaseSensitive = srcReq.rawHeaders[i];
          const headerLowerCase = headerCaseSensitive.toLowerCase();
          if (proxyReqOpts.headers[headerLowerCase] != null) {
            proxyReqOpts.headers[headerCaseSensitive] =
              proxyReqOpts.headers[headerLowerCase];
            delete proxyReqOpts.headers[headerLowerCase];
          }
        }
        return proxyReqOpts;
      },
    }),
  );
  const svr = app.listen(device.proxy.port, device.proxy.host, () => {
    console.log("%j: Proxying @ %j", device.name, svr.address());
  });
};
