import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../App";

const useFetch = (url) => {
  const token = useAuth();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data.content);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
