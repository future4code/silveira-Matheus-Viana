import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";

const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Não está logado!!!");
      navigate("/");
      /* goToLogin(navigate); */ /* useLayoutEffect */
    }
  }, []);
};

export default useProtectedPage;