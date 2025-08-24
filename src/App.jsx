import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/App.css";

import Home from "./Screens/Home";
import About from "./Screens/About";
import WorkWithUs from "./Screens/WorkWithUs";
import Documents from "./Screens/Documents";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <div className="parent">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
