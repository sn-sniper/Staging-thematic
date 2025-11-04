const HOST = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");
const ROUTE_PREFIX = (import.meta.env.VITE_API_ROUTE ?? "/api/v2")
  .replace(/^(?!\/)/, "/")
  .replace(/\/$/, "");

export const API_CONFIG = {
  host: HOST,
  routePrefix: ROUTE_PREFIX,
  baseURL: HOST,
  timeout: 20000,
  defaultHeaders: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export function resolveBaseURL() {
  if (HOST) {
    return HOST;
  }

  console.warn(
    "VITE_API_URL is not defined; axios client will use relative requests."
  );
  return ROUTE_PREFIX || "/";
}
