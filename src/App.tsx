// import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from 'react-router-dom'

import Footers from "./components/Footer/Footers"
import Abouts from "./components/About/Abouts"
import Projects from "./components/Project/Projects"
import Services from "./components/Service/Services"
import ComponentMainFunction from "./components/Main/ComponentMainFunction"


function App() {
  return (
    <>
      {/* <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
              <div className="preloader-inner position-relative">
                  <div className="preloader-circle"></div>
                  <div className="preloader-img pere-text">
                      <img src="/assets/img/logo/loder-logo.png" alt="" />
                  </div>
              </div>
          </div>
      </div> */}
      {/* <Headers /> */}
      <Routes>
        <Route path="/" element={<ComponentMainFunction />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/service" element={<Services />} />
      </Routes>
      <Footers />
    </>
  )
}

export default App
