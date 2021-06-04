import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
// components
import { TopBar, MainContainer } from './components';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;
