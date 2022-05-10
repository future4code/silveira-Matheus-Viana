import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../routes/coordinator";

const useUnprotectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/feed");
      /* goToFeed(navigate); */ /* useLayoutEffect */
    }
  }, []);
};

export default useUnprotectedPage;