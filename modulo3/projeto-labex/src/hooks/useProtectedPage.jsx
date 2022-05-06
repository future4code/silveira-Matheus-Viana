import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useProtectedPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      console.log("Não está logado!!!");
      navigate("/login");
    }
  }, []);
};

export default useProtectedPage;