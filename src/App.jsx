//COMP229-Assignment1, ELijah Stuwe, 301421199, September 19 2025

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import { ThemeProvider } from "@material-ui/styles";
import MainRouter from "../MainRouter";
//import Contact from "./contact";
//import theme from "../theme";
//import { hot } from "react-hot-loader";

const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default App;