import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from 'react';

import './navbar.css'

function Navbar() {
  const [scrollDirection, setScrollDirection] = useState(false);
  let prevScrollY = window.scrollY;
  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY) {
      setScrollDirection(true);
      console.log("hidden");
    } else if (currentScrollY < prevScrollY) {
      setScrollDirection(false);
      console.log("visible");
    }
    prevScrollY = currentScrollY;
    
  };
  // useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return
 
  () =>
   
  window.removeEventListener('scroll', handleScroll);
    }, []);
  // window.addEventListener('scroll', handleScroll);

  // useEffect(() => {
  //   setCount(prevCount => prevCount + 1);
  // });
 
  // className={isNavbarVisible ? 'visible' : 'hidden'}>
  //       </nav>
  //   );

  
  return (
      <nav className={`navbar ${scrollDirection ? 'hidden' : 'visible'}`} >
        
        <div className="navbarLogo">
        <img src = "src/assets/koala_logo.png" className="koalaLogo">

        </img>
          
          
          <div className="nav_name">
            Brian Le {scrollDirection}
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



export default Navbar