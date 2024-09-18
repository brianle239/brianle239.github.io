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

              <div className="exp">
                <div className="expTitle">
                  Experience (Work in Progress)
                </div>
                <div className="expFlex">
                  <div className="expCompName">
                    Partner Engineering and Science, Inc
                  </div>
                  <div className="expPos">
                    Backend Developer Intern,<br></br>
                    Team Lead
                  </div>
                  <div className="expDesc">
                    A sponsored internship experience where I got to lead a team of interns in developing
                    a cutting edge AI model to generate reports and help digitilize information itno cloud databases
                  </div>
                </div>
                <div className="expBorder" /> 
              
                <div className="expFlex">
                  <div className="expCompName">
                    Northrop Grumman
                  </div>
                  <div className="expPos">
                    Software Engineer Intern
                  </div>
                  <div className="expDesc">
                    Build upon a Data as a Service (DaaS) project by 
                    parsing and organizing terrabytes of GNSS data into a MySQL database for fast retrival time
                    via a RESTful API. 
                  </div>
                </div>
                <div className="expBorder" /> 
              </div>
              
            </div>
            
        </>
    
    );

  }
}

export default Page3;