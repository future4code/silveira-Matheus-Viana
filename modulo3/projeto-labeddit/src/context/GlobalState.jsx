import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => { 
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Entrar"
  );

  const states = { rightButtonText };
  const setters = { setRightButtonText };
  const requests = {  };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
