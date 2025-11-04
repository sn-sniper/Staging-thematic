import { useCallback, useState } from "react";
import { callApi } from "../services/apiService";

export function useApiMutation({ resource, method, onSuccess, onError } = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const mutate = useCallback(
    async (args = {}) => {
      setLoading(true);
      setError(null);

      try {
        const response = await callApi(resource, method, args);
        setData(response);
        onSuccess?.(response);
        return response;
      } catch (err) {
        setError(err);
        onError?.(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [resource, method, onSuccess, onError]
  );

  return {
    mutate,
    data,
    error,
    loading,
    isLoading: loading,
    isError: Boolean(error),
    isSuccess: Boolean(!loading && !error && data !== null),
    reset() {
      setData(null);
      setError(null);
    },
  };
}
