// /hooks/useFetch.jsx
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  useEffect(() => {
    setState({ data: null, isLoading: true, hasError: null });

    fetch(url)
      .then((response) => response.json())
      .then((data) => setState({ data, isLoading: false, hasError: null }))
      .catch((error) => setState({ data: null, isLoading: false, hasError: error }));
  }, [url]);

  return state;
};
