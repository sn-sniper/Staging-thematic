import { useCallback, useEffect, useRef, useState } from "react";
import { callApi } from "../services/apiService";

function defaultTransform(value) {
  return value;
}

export function useApiQuery({
  resource,
  method,
  args = {},
  enabled = true,
  dependencies = [],
  transform = defaultTransform,
} = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const argsRef = useRef(args);

  const fetchData = useCallback(
    async (overrides = {}) => {
      setLoading(true);
      setError(null);

      try {
        const response = await callApi(resource, method, {
          ...argsRef.current,
          ...overrides,
        });

        const transformed = transform(response);
        setData(transformed);
        return transformed;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [resource, method, transform]
  );

  useEffect(() => {
    argsRef.current = args;
  }, [args]);

  useEffect(() => {
    if (!enabled) return;
    fetchData().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, fetchData, ...dependencies]);

  return {
    data,
    error,
    loading,
    refetch: fetchData,
    isLoading: loading,
    isError: Boolean(error),
    isSuccess: Boolean(!loading && !error && data !== null),
  };
}
