import React, { Component } from "react";
import './page3.css'
import Wave_border_top from "../wave_borders/wave_border_top/wave_border_top.jsx";
import Wave_border from "../wave_borders/wave_border/wave_border.jsx";
class Page3 extends Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
        <>
            
            <div className="page3">
            <Wave_border_top />
            <div className="border">
            {/* <Wave_border />  */}
            </div>
            
            </div>
            
        </>
    
    );

  }
}

export default Page3;