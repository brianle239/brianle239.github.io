import React, { Component } from "react";
import './page1.css'
import Koala from "../koala/koala.jsx";

class Page1 extends Component {
  constructor(props) {
    super(props);

    // Bind mouse events
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  state = {
    isLight: false,
  };

  handleMouseOver() {
    this.setState({
      isLight: true,
      
    });
  }

  handleMouseOut() {
    this.setState({
      isLight: false,
    })
  }
  

  render () {
    return (
  
        <div className="title">
            <div className="flex-item1">
                <h2>Greetings</h2>
                <h1>Brian Le</h1>
            </div>
            <div className="flex-item2">
                <Koala />
            </div>
            
        </div>
        
    
    );

  }
}

export default Page1;