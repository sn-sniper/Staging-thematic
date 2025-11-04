import Cookies from "js-cookie";

const AUTH_HEADER = "Authorization";
const CONTEXT_HEADER_KEYS = ["YoutubeChannelId", "TeamId"];
const AUTH_COOKIE_KEY = "tmc_auth_token";

let authToken = import.meta.env.VITE_API_TOKEN ?? "";
const contextHeaders = new Map();

const headerFromEnv = import.meta.env.VITE_API_AUTH_HEADER;
if (headerFromEnv) {
  authToken = headerFromEnv;
}

export function getAuthToken() {
  return authToken || Cookies.get(AUTH_COOKIE_KEY) || "";
}

export function setAuthToken(token, { persist = false } = {}) {
  authToken = token ?? "";
  if (persist) {
    if (authToken) {
      Cookies.set(AUTH_COOKIE_KEY, authToken, { sameSite: "strict" });
    } else {
      Cookies.remove(AUTH_COOKIE_KEY);
    }
  }
}

export function clearAuthToken() {
  authToken = "";
  Cookies.remove(AUTH_COOKIE_KEY);
}

export function setContextHeader(name, value) {
  if (!name) return;

  if (value === undefined || value === null || value === "") {
    contextHeaders.delete(name);
    return;
  }

  contextHeaders.set(name, value);
}

export function getContextHeaders() {
  return Array.from(contextHeaders.entries()).reduce((acc, [name, value]) => {
    acc[name] = value;
    return acc;
  }, {});
}

export function clearContextHeaders() {
  contextHeaders.clear();
}

export function getDefaultHeaders() {
  const headers = {};
  const token = getAuthToken();
  if (token) {
    headers[AUTH_HEADER] =
      token.startsWith("Bearer ") || token.startsWith("Token ")
        ? token
        : `Bearer ${token}`;
  }

  for (const key of CONTEXT_HEADER_KEYS) {
    const value = contextHeaders.get(key);
    if (value) {
      headers[key] = value;
    }
  }

  for (const [name, value] of contextHeaders.entries()) {
    if (headers[name]) continue;
    headers[name] = value;
  }

  return headers;
}
