import React from "react";

import "./css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Screens/Home";
import About from "./Screens/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WorkWithUs from "./Screens/WorkWithUs";
import Documents from "./Screens/Documents";
import Cinta from "../src/assets/img/LOGOS/cinta.png";
const App = () => {
  return (
    <Router>
      <div className="parent">
        <Header />

        <main>
          <Route path="/documents" component={Documents} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} exact />
        </main>
        <img src={Cinta} className="cinta" alt="deacrotive tape" />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
