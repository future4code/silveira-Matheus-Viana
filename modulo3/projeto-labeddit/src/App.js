import React from 'react';
import GlobalStyle from './constants/GlobalStyle';import Router from "./routes/Router";
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
