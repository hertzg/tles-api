import { request as httpsRequest } from "node:https";
import { request as httpRequest } from "node:http";

export function request(url, options) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const protocol =
      parsedUrl.protocol === "https:" ? httpsRequest : httpRequest;
    const req = protocol(url, options, resolve);
    req.on("error", reject);
    req.end(options?.body);
  });
}
