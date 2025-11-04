import httpClient from "../api/httpClient";
import { API_CONFIG } from "../api/config";
import { apiSpec } from "../api/spec";
import {
  applyPathParams,
  extractVariant,
  mergeHeaders,
  sanitizeQueryParams,
} from "../utils/apiHelpers";

function ensureResource(resource) {
  const resourceSpec = apiSpec[resource];
  if (!resourceSpec) {
    throw new Error(`Unknown API resource: ${resource}`);
  }

  return resourceSpec;
}

function ensureMethod(resourceSpec, resource, methodName) {
  const methodSpec = resourceSpec[methodName];
  if (!methodSpec) {
    throw new Error(
      `Unknown method "${methodName}" for resource "${resource}"`
    );
  }

  return methodSpec;
}

function validateRequiredHeaders(endpointSpec, headers) {
  const missing = [];
  for (const header of endpointSpec.headers ?? []) {
    if (!header.required) continue;
    const hasHeader = headers?.[header.name];
    if (!hasHeader) {
      missing.push(header.name);
    }
  }

  if (missing.length) {
    console.warn(
      `Missing required headers for ${endpointSpec.httpMethod} ${
        endpointSpec.path
      }: ${missing.join(", ")}`
    );
  }
}

export async function callApi(resource, methodName, options = {}) {
  const resourceSpec = ensureResource(resource);
  const methodSpec = ensureMethod(resourceSpec, resource, methodName);
  const endpointSpec = extractVariant(methodSpec, options.variant);

  if (!endpointSpec) {
    throw new Error(
      `No endpoint variants defined for ${resource}.${methodName}`
    );
  }

  let url = applyPathParams(endpointSpec.path, options.pathParams);

  if (
    typeof url === "string" &&
    API_CONFIG.host &&
    url.startsWith(API_CONFIG.host)
  ) {
    url = url.slice(API_CONFIG.host.length);
  }

  const isAbsoluteUrl = typeof url === "string" && /^https?:\/\//iu.test(url);

  if (!isAbsoluteUrl) {
    if (typeof url !== "string" || url.length === 0) {
      url = "/";
    } else if (!url.startsWith("/")) {
      url = `/${url}`;
    }
  }

  const headers = mergeHeaders(options.headers);

  validateRequiredHeaders(endpointSpec, headers);

  const requestConfig = {
    url,
    method: endpointSpec.httpMethod?.toLowerCase() ?? "get",
    params: sanitizeQueryParams(options.query),
    data: options.body,
    headers,
    signal: options.signal,
    timeout: options.timeout,
    withCredentials: options.withCredentials,
    ...options.config,
  };

  const response = await httpClient.request(requestConfig);
  return response.data;
}

export function createResourceService(resource) {
  const resourceSpec = ensureResource(resource);

  const service = {
    call(methodName, options) {
      return callApi(resource, methodName, options);
    },
    methods: Object.keys(resourceSpec),
  };

  for (const methodName of Object.keys(resourceSpec)) {
    service[methodName] = (options) => callApi(resource, methodName, options);
  }

  return service;
}

export function listResources() {
  return Object.keys(apiSpec);
}
