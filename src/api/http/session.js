import { request as httpRequest } from "./request.js";
import { CookieJar } from "tough-cookie";
import { Buffer } from "node:buffer";

export function createSession({ cookieJar = new CookieJar() } = {}) {
  const request = async function (url, options = {}) {
    options.headers = {
      ...options.headers,
    };

    const cookiesHeader = await cookieJar.getCookieString(url);
    if (cookiesHeader) {
      options.headers.Cookie = cookiesHeader;
    }

    const res = await httpRequest(url, options);
    const setCookieHeaders = res.headers["set-cookie"];
    if (setCookieHeaders) {
      await Promise.all(
        setCookieHeaders.map((cookie) => cookieJar.setCookie(cookie, url)),
      );
    }
    return {
      res,
      status: res.statusCode,
      headers: res.headers,
      text: async () => {
        return new Promise((resolve, reject) => {
          const chunks = [];
          res.on("data", (chunk) => chunks.push(chunk));
          res.on("end", () => resolve(Buffer.concat(chunks).toString()));
          res.on("error", reject);
        });
      },
    };
  };

  return { cookieJar, request };
}
