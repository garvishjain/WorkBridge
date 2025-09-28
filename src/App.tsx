import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Footers from "./components/Footers"
import Headers from "./components/Headers"
import ComponentMainFunction from "./components/ComponentMainFunction"


function App() {
  return (
    <>
      {/* <!-- Preloader Start --> */}
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
      <Headers />
      <ComponentMainFunction />
      <Footers />
    </>
  )
}

export default App
