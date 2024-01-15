import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState, Link } from 'react';
import Page2 from "../page2/page2";

import './navbar.css'

function Navbar({ page1, page2, page3 }) {
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
 
  const scrollOne = () => {    
    page1.current.scrollIntoView();
    setScrollDirection(false);
    
  };
  const scrollTwo = () => {    
    const currentScrollY = window.scrollY;
    page2.current.scrollIntoView();
    setScrollDirection(false);
    prevScrollY = currentScrollY;
  }

  const scrollThree = () => {    
    page3.current.scrollIntoView();
    setScrollDirection(false);
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
          <div onClick={scrollOne}>
            Home
          </div>
          {/*  onClick={handleScrollToAbout} */}
          <div onClick={scrollTwo}>  
            About
          </div>
          <div onClick={scrollThree}>
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