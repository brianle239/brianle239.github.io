import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState, Link } from 'react';
import Page2 from "../page2/page2";

import './navbar.css'

function Navbar({ page1, page2, page3 }) {
  const [scrollDirection, setScrollDirection] = useState(true);
  let prevScrollY = window.scrollY;
  const [navMoved, setNavCount] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (navMoved == 0) {
        const currentScrollY = window.scrollY;
        if (currentScrollY > prevScrollY) {
          setScrollDirection(true);
        } else if (currentScrollY < prevScrollY) {
          setScrollDirection(false);
        }
        prevScrollY = currentScrollY;
      } 
      else {
        setNavCount(0);
      }
      
      
      
    };
    window.addEventListener('scroll', handleScroll); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  
  }, [navMoved]);
  
 
  const scrollOne = () => {    
    page1.current.scrollIntoView();
    setScrollDirection(false);
    setNavCount(navMoved+1);
    
  };
  
  const scrollTwo = () => {    
   
    page2.current.scrollIntoView();
    setNavCount(navMoved+1);

  }

  const scrollThree = () => {    
    page3.current.scrollIntoView();
    setScrollDirection(false);
    setNavCount(navMoved+1);
  };
  


  
  return (
      <nav className={`navbar ${scrollDirection ? 'hidden' : 'visible'}`} >
        
        <div className="navbarLogo">
        <img src = "./koala_logo.png" className="koalaLogo">
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