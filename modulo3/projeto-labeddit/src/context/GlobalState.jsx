import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => { 
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Entrar"
  );
  const [postTitle, setPostTitle] = useState();
  const [postBody, setPostBody] = useState();
  const [postUser, setPostUser] = useState();
  const [postCommentCount, setPostCommentCount] = useState();
  const [postVoteSum, setPostVoteSum] = useState();

  const states = { rightButtonText, postTitle, postBody, postUser, postCommentCount, postVoteSum };
  const setters = { setRightButtonText, setPostTitle, setPostBody, setPostUser, setPostCommentCount, setPostVoteSum };
  const requests = {  };
  
  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
