import Express from "express";
import ExpressAsyncHandler from "express-async-handler";
import Morgan from "morgan";
import { FileCookieStore } from "tough-cookie-file-store";
import { CookieJar } from "tough-cookie";
import { createProxyServer } from "./proxy.js";
import { createClient } from "./client.js";
import { readFile } from "node:fs/promises";
import { menu } from "./api/menu.js";

const CONF = JSON.parse(await readFile("./conf/config.json", "utf-8"));

const app = Express();
app.use(Morgan("combined"));

const clients = {};
const ensureClient = async (device) => {
  return (clients[device.id] ??= await createClient({
    baseUrl: device.address,
    username: device.username,
    password: device.password,
    cookieJar: new CookieJar(new FileCookieStore(CONF.cookieJar)),
  }));
};

app.get(
  "/",
  ExpressAsyncHandler(async (req, res) => {
    res.json({ links: CONF.devices.map((d) => `/${d.id}`) });
  }),
);

app.get(
  "/:id",
  ExpressAsyncHandler(async (req, res) => {
    const device = CONF.devices.find((d) => d.id === req.params.id);
    if (device == null) {
      res.status(404).json({ error: "Device not found" });
      return;
    }

    const client = await ensureClient(device);

    const items = await menu(client.session, { baseUrl: device.address });

    res.json({ links: items.map((link) => `/${device.id}/${link}`) });
  }),
);

app.get(
  "/:id/:resource",
  ExpressAsyncHandler(async (req, res) => {
    const device = CONF.devices.find((d) => d.id === req.params.id);
    if (device == null) {
      res.status(404).json({ error: "Device not found" });
      return;
    }

    const client = await ensureClient(device);

    const data = await client.load(
      new URL(`/${req.params.resource}.htm`, device.address),
    );

    res.json({ data });
  }),
);

for (let i = 0; i < CONF.devices.length; i++) {
  const device = CONF.devices[i];
  if (device.proxy != null) {
    device.proxy = {
      host: device.proxy?.host ?? CONF.listen.host,
      port: device.proxy?.port ?? CONF.listen.port + 1 + i,
    };

    createProxyServer(device);
  }
}

const svr = app.listen(CONF.listen.port, CONF.listen.host, () => {
  console.log("Listening @ %j", svr.address());
});
