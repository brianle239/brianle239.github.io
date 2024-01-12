import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState, Link } from 'react';
import Page2 from "../page2/page2";

import './navbar.css'

function Navbar({ name, age, occupation }) {
  const [scrollDirection, setScrollDirection] = useState(true);
  let prevScrollY = window.scrollY;
  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY) {
      setScrollDirection(true);
    } else if (currentScrollY < prevScrollY) {
      setScrollDirection(false);
    }
    prevScrollY = currentScrollY;
    
  };
  // useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return
 
  () =>
   
  window.removeEventListener('scroll', handleScroll);
    }, []);

  // handleScroll = e => {
  //   e.preventDefault();
  //   const main = this.main.current;
  //   window.scrollTo({
  //     top: main.offsetTop,
  //     left: 0,
  //     behavior: "instant"
  //   });
  // };
 
  const handleScrollToAbout = () => {
    console.log(name.current);
    
    name.current.scrollIntoView();
  };
  


  
  return (
      <nav className={`navbar ${scrollDirection ? 'hidden' : 'visible'}`} >
        
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
          {/*  onClick={handleScrollToAbout} */}
          <div onClick={handleScrollToAbout}>  
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