import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import REFUND from "./components/Refund/Refund"
import Resume from "./components/Resume/ResumeNew";
import Form from "./components/Form/form"
import Signup from "./components/Autentication/Signup";
import Login from "./components/Autentication/Login"
import Tempalte from "./components/Template/Templates"
import Contect from "./components/contectus"
import Consent from "./components/Concent/Conecent"
import Serchfrom from "./components/SercehBar/serchbar"
import TermsOfService from "./components/Teremuse"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);




  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>

        <Navbar />

        <ScrollToTop/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/contect" element={< Contect/>} />
          <Route path="/PrivacyPolicy" element={< Consent/>} />
          <Route path="/serch" element={< Serchfrom/>} />

          <Route path="/Project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/template" element={<Tempalte />} />
          <Route path="/form" element={<Form />} />
          <Route path="/termsOfService" element={<TermsOfService />} />
          <Route path="/Refund" element={<REFUND />} />

          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> */}

        </Routes>
        <Footer />
      </div>
      </>
  );
}

export default App;
