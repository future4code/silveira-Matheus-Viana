import React from "react";
import Router from "./routes/Router";
import GlobalStyle from "./components/GlobalStyles/globalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Router />
    </div>
  );
};

export default App;
