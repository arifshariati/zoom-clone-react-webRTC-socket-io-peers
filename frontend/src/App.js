import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
// components
import { TopBar } from './components';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      {/* Video Player */}

      {/* Options */}
    </ThemeProvider>
  );
}

export default App;
