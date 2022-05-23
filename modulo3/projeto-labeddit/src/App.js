import React from "react";
import GlobalStyle from './constants/GlobalStyle';import Router from "./routes/Router";
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import GlobalState from './context/GlobalState';

const App = () => {

  return (
    <div>
      <GlobalStyle/>
      <GlobalState>
        <ThemeProvider theme={theme}>        
          <Router />
        </ThemeProvider>
      </GlobalState>
    </div>
  );
}

export default App;
