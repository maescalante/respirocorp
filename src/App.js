import React from "react";

import "./css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Screens/Home";
import About from "./Screens/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WorkWithUs from "./Screens/WorkWithUs";
import Documents from "./Screens/Documents";
const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/documents" component={Documents} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} exact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
