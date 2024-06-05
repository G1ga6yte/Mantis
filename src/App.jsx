import React from "react";
import './App.scss';
import Lenis from "@studio-freight/lenis";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  const lenis = new Lenis({
    duration: 2,
    wheelMultiplier: 0.2,

  })
  lenis.on('scroll', (e) => {})
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  
  
  return (
    <div className="App G-Container">
      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/home" element={<Home/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
