import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { useEffect } from 'react';

import './navbar.css'

function Navbar() {
 
  // useEffect(() => {
  //   setCount(prevCount => prevCount + 1);
  // });
 
  // className={isNavbarVisible ? 'visible' : 'hidden'}>
  //       </nav>
  //   );

  
  return (
      <nav className="navbar" >
        
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


// export default Navbar;
function Parentheses() {
  return (<h1>
              We can call function using name of the 
              function followed by Parentheses 
          </h1>);
}

export default Navbar