import { useState, useEffect } from "react";

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          let error = new Error("Fetch has failed");
          error.status = res.status || "00";
          error.statusText = res.statusText || "An error has ocurred";
          throw error;
        }

        const json = await res.json();

        if (!signal.abort) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.abort) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.abort) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
