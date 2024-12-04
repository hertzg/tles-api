import { createSession } from "./api/http/session.js";
import { auth } from "./api/auth.js";
import { collectVariables, extractScriptBody } from "./api/parser.js";

export const createClient = async ({
  baseUrl,
  username,
  password,
  cookieJar,
}) => {
  const session = createSession({ cookieJar });

  const authResult = await auth(session, { baseUrl, username, password });
  if (!authResult.success) {
    throw new Error("Authentication failed");
  }

  const load = async (url, init = undefined, format = "parsed") => {
    const text = await session.request(url, init).then((res) => res.text());
    try {
      const script = extractScriptBody(text);
      if (format === "js") {
        return script;
      }

      return collectVariables(script);
    } catch (e) {}

    return null;
  };

  return {
    session,
    cookieJar,
    load,
  };
};
