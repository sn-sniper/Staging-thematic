import axios from "axios";
import { API_CONFIG, resolveBaseURL } from "./config";
import { getDefaultHeaders } from "../middleware/requestContext";
import { mergeHeaders } from "../utils/apiHelpers";
import { normalizeApiError } from "../handlers/apiErrorHandler";

const client = axios.create({
  baseURL: resolveBaseURL(),
  timeout: API_CONFIG.timeout,
  headers: { ...API_CONFIG.defaultHeaders },
});

client.interceptors.request.use((config) => {
  config.headers = mergeHeaders(
    API_CONFIG.defaultHeaders,
    getDefaultHeaders(),
    config.headers
  );
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(normalizeApiError(error))
);

export default client;
