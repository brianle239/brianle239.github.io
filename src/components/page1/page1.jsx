import React, { Component } from "react";
import './page1.css'
import Koala from "../koala/koala.jsx";
import Wave_border from "../wave_borders/wave_border/wave_border.jsx";

class Page1 extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div className="main_page">
        <div className="title">
            <div className="flex-item1">
                <div className="greetings">Greetings,</div>
                <div className="name">Brian Le</div>
                <div className="test loadFade">[ Student + Developer + Koala Lover ]</div>
                <div className="icons loadFade">
                  <div id = "Resume" target="_blank">
                    <a href="https://brianle239.github.io/resume_git.pdf">
                    <img src="./document_logo.png" alt="Resume Icon" class="image_link" />
                    <p className = "img_caption">Resume</p>
                    </a>
                
                  </div>
                  <div id = "GitHub" target="_blank">
                      <a href="https://github.com/brianle239">
                      <img src="./github_logo.png" alt="GitHub Icon" class="image_link" />
                      <p className = "img_caption">GitHub</p>
                      </a>
                  </div>
                  <div id = "Linkedin" target="_blank">
                      <a href="https://www.linkedin.com/in/briananhle/">
                      <img src="./linkedin_logo.png" alt="Linkedin Icon" className="image_link" />
                      <p className = "img_caption">Linkedin</p>
                      </a>
            
                  </div>
                </div>
            </div>
            <div className="flex-item2 loadFade">
              <div className="koalaPosition">
                <Koala/>
              </div>
                
            </div>
            
            
        </div>
        
        <div className="border">
          <Wave_border />
        </div>
          
        </div>
    
    );

  }
}

export default Page1;