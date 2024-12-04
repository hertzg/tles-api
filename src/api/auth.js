import { extractScriptBody, collectVariables } from "./parser.js";

export const auth = async (
  session,
  { baseUrl, username, password, cpassword = "", logon = "Login" },
) => {
  const body = new URLSearchParams([
    ["username", username],
    ["password", password],
    ["cpassword", cpassword],
    ["logon", logon],
  ]).toString();

  const init = {
    headers: {
      "Content-Length": body.length,
      "Content-Type": "application/x-www-form-urlencoded",
      Referer: baseUrl,
    },
    body,
    method: "POST",
  };

  const res = await session.request(new URL("/logon.cgi", baseUrl), init);

  const html = await res.text();

  const script = extractScriptBody(html);
  if (script === null) {
    return { success: false, error: "No script found" };
  }

  const variables = collectVariables(script);
  if (variables?.logonInfo?.[0] !== 0) {
    return {
      success: false,
    };
  }

  return {
    success: true,
  };
};
