import React, { Component } from "react";
import './navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <nav className="navbar">
          <div className="logo">
            <div>
              Brian Le
            </div>
            <div>
              Le
            </div>
          </div>
          <div className="redirects">
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