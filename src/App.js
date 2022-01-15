import React from "react";
import "./style.css";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//npm i react-router-dom
export default function App() {
  return (
    
    // <div>
    //  <Home/>
    //  <About/>
    //  <Contact/>
    // </div>

    <div>
      <Router>
      <Navbar/>
        <Routes>
       {/* <Navbar/> */}
          <Route path="/" element ={<Home/>} />
          <Route path="/Contact" element ={<Contact/>} />
          <Route path="/About" element ={<About/>} />
          </Routes>
        </Router>
          </div>

  );
}
