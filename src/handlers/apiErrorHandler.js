import axios from "axios";

function parseAxiosError(error) {
  const status = error.response?.status ?? null;
  const statusText = error.response?.statusText ?? "";
  const data = error.response?.data;

  const message =
    data?.message ||
    data?.error ||
    statusText ||
    error.message ||
    "Unknown error";
  const details = data?.errors || data?.details || null;

  return {
    type: "axios",
    status,
    message,
    details,
    original: error,
  };
}

export function normalizeApiError(error) {
  if (!error) {
    return {
      type: "unknown",
      status: null,
      message: "Unknown error",
      details: null,
      original: null,
    };
  }

  if (axios.isAxiosError(error)) {
    return parseAxiosError(error);
  }

  if (error instanceof Error) {
    return {
      type: "generic",
      status: null,
      message: error.message,
      details: null,
      original: error,
    };
  }

  return {
    type: "unknown",
    status: null,
    message: String(error),
    details: null,
    original: error,
  };
}

export function isUnauthorized(error) {
  const normalized = normalizeApiError(error);
  return normalized.status === 401;
}
