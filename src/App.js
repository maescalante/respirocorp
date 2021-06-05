import React from "react";

import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Screens/Home";
import About from "./Screens/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
