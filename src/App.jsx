import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from './components/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import customtheme from "./styles/Theme";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { APP_ROUTES } from './utils/constants';

const App = () => {
  console.log("Hello");
  return (
    <ThemeProvider theme={customtheme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path={APP_ROUTES.SIGN_UP} exact element={<SignUp />} />
          <Route path={APP_ROUTES.SIGN_IN} element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;