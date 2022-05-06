import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const getData = () => {
    setIsLoading(true);
    setError(undefined);
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return [data, isLoading, error];
};

export default useRequestData;