import React, { Component } from "react";
import './navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <nav className="navbar">
         
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
}

export default Navbar;