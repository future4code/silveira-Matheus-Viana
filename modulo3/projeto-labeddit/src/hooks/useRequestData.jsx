import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (url) => {
  const [data, setData] = useState();
  /* const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined); */

  const getData = () => {
    /* setIsLoading(true); */
    /* setError(undefined); */
    axios
      .get(url , {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      .then((res) => {
        /* setIsLoading(false); */
        setData(res.data);
      })
      .catch((err) => {
        /* setError(err); */
        /* setIsLoading(false); */
      });
  };
  useEffect(() => {
    getData();
  }, [url]);

  return [data]; /* , isLoading, error */
};

export default useRequestData;