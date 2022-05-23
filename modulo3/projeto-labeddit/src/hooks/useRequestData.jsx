import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (url) => {
  const [data, setData] = useState();

  const getData = () => {
    axios
      .get(url , {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
      });
  };
  useEffect(() => {
    getData();
  }, [url]);

  return [data, getData];
};

export default useRequestData;