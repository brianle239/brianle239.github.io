import React, { Component } from "react";
import './page2.css'
import Wave_border_top from "../wave_borders/wave_border_top/wave_border_top.jsx";
class Page2 extends Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
        <>
            <div className="page2">
              <div className="profImage">
                <img className="selfImage">
                    
                </img>
              </div>
              <div className="aboutMeText">
                  Aspiring Software developer/engineer in Los Angeles 
                  <br />

                  Computer Science undergraduate at University of California, Irvine 
                  with an expected graduation date of June 2025. ZOT ZOT ZOT!!!
                  <br />

                  You can probably find me at any of UCI's hackathons :D
                  <br />

                  Favorite language: C++
                  Most recent languaged learned: Prolog
                  <br />

                  [How my friends sees me as]
                  
              </div>
                 
            </div>
            
        </>
    
    );

  }
}

export default Page2;