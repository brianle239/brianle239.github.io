import React, { Component } from "react";
import './glitch.css'


class Glitch extends Component {
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

    <div className="glitch glitch--style-6">
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
    </div>
    
    );

  }
}

export default Glitch;