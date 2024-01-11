import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { useEffect } from 'react';

import './navbar.css'

function Navbar() {
 
  
  useEffect(() => {
    setCount(prevCount => prevCount + 1);
  });
  
  
//   return (
//     <nav
 
// className={isNavbarVisible ? 'visible' : 'hidden'}>
//       </nav>
//   );

  
  return (
      <nav className="navbar" onScroll={handleScroll}>
        
        <div className="navbarLogo">
        <img src = "src/assets/koala_logo.png" className="koalaLogo">

        </img>
          
          
          <div className="nav_name">
            Brian Le
          </div>
          
        </div>
        <div className="redirects">
          <div>
            Home
          </div>
          <div>
            About
          </div>
          <div>
            Technologies
          </div>
          <div>
            Experience
          </div>
          <div>
            Projects
          </div>
        </div>



      </nav>
  
  );

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Navbar());

// export default Navbar;