import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from './components/Home';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import customtheme from "./styles/Theme";

const App = () => {
  console.log("Hello");
  return (
    <ThemeProvider theme={customtheme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;