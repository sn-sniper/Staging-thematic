export function applyPathParams(path, pathParams = {}) {
  if (!path) return path;

  return Object.entries(pathParams).reduce((acc, [key, value]) => {
    const token = `:${key}`;
    if (!acc.includes(token)) {
      return acc;
    }

    return acc.replaceAll(token, encodeURIComponent(String(value)));
  }, path);
}

export function mergeHeaders(...headerSets) {
  return headerSets.reduce((acc, headers) => {
    if (!headers) return acc;
    for (const [key, value] of Object.entries(headers)) {
      if (value === undefined || value === null) continue;
      acc[key] = value;
    }
    return acc;
  }, {});
}

export function sanitizeQueryParams(params) {
  if (!params) return undefined;

  const sanitized = {};
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "") continue;
    sanitized[key] = value;
  }

  return Object.keys(sanitized).length ? sanitized : undefined;
}

export function extractVariant(methodEntries = [], variant) {
  if (!Array.isArray(methodEntries) || !methodEntries.length) {
    return null;
  }

  if (variant !== undefined) {
    return methodEntries[variant] ?? null;
  }

  return methodEntries[0];
}
