import React, { useState, useEffect } from "react";
import Preloader from "./Components/Pre";
import NavBar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Servicios1 from "./Components/Projects/Servicios/Servicios1";
import Servicios2 from "./Components/Projects/Servicios/Servicios2";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CalendlyComponent from "./Components/Calendly/Calendly";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/servicios1" element={<Servicios1 />} />
          <Route path="/servicios2" element={<Servicios2 />} />
          <Route path="/calendly" element={<CalendlyComponent />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          {/* <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
