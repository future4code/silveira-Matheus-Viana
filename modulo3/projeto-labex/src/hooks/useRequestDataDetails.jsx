import axios from "axios";
import { useEffect, useState } from "react";

const useRequestDataDetails = (url, token, id) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const HEADERS = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  const getData = () => {
    setIsLoading(true);
    setError(undefined);
    axios
      .get(`${url}/${id}`, HEADERS)
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

export default useRequestDataDetails;