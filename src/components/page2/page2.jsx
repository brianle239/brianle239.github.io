import React, { Component, useRef, createRef} from "react";
import './page2.css'
import Wave_border_top from "../wave_borders/wave_border_top/wave_border_top.jsx";
class Page2 extends Component {
  
  constructor(props) {
    super(props);
    this.changeProf = this.changeProf.bind(this);
  }
  yes = "yes";
  myRef = createRef();
  state = {
    isClicked: false,
    currentImage: './profile_picture_crop.jpg',
  };

  isTransitioning = false;
  

  changeProf() {
    
    if (!this.isTransitioning) {
      this.isTransitioning = true;
      if (!this.state.isClicked) {
        this.setState({
          isClicked: true,
          currentImage: './shirokuma.jpg'
          
        });
      }
      else {
        this.setState({
          isClicked: false,
          currentImage: './profile_picture_crop.jpg',
          
        });
      }
      setTimeout(() => {
        this.isTransitioning = false;
      }, 2010); // Adjust timeout to match transition duration
      
    }
    // this.isTransitioning = false;
    
  }
  


  render () {
    return (
        <>
            <div className="page2" ref={this.myRef}>
              <div className="profImage">
                <div className="imageBackground">

                </div>  
                <img className="selfImage" style={{ backgroundImage: `url(${this.state.currentImage})`, transition: "2s" }}>
                  
                </img>
                
              </div>
              <div className="aboutMeText">
                  Aspiring software developer/engineer in <p style={{color:"orange", display:"inline"}}>Los Angeles, CA</p> with 1 year of 
                  professional experience at Northrop Grumman
                  <br />
                  <br />

                  Computer Science undergraduate at <p style={{color:"orange", display:"inline"}}>University of California, Irvine </p> 
                  with an expected graduation date of <p style={{color:"orange", display:"inline"}}>June 2025</p>. ZOT ZOT ZOT!!!
                  <br />
                  <br />

                  You can probably find me in study lounges with my friends grinding DSA prbolems or
                  at any of UCI's hackathons :D
                  <br />
                  <br />

                  Favorite language: C++
                  <br />
                  Most recent languaged learned: Prolog
                  <br />
                  <br />
                  <div className="secret" onClick={this.changeProf}>
                    [How my friends see me]
                  </div>
                  
                  
              </div>
                 
            </div>
            <div className="techStack">
              <div className="techIntro border-right">
                <div className="currentTech">
                  ~ Current Tech ~
                </div>
                <div className="techDesc">
                  I am always learning but so far, these are my favorite technologies I use. Of those listed, 
                  my first introduction to these technologies came from working on my projects listed below. Currently, I 
                  am working on personal projects involing AWS and React.
                </div>
                
                <div className="learningTech">
                    ~ Currently Learning ~
                </div>
                <div className="techDesc">
                    I am diving head into AI and machine learning by exploring regression and classification
                    models using Pytorch. I am slowly incorperating AI into my tech stack and taking any 
                    oppurtunity to apply AI in any of my projects.
                </div>
              </div>
    
              <div className="techIconList">
                <div className="techSubTitle"> 
                  Fluent Languages
                </div>
                
                <ul className="list">
                  <li>Python</li>
                  <li>C++</li>
                  <li>C</li>
                  <li>Java</li>
                </ul >

                <div className="techSubTitle"> 
                  Frameworks
                
                </div>
                <ul className="list">
                  <li>React / Vite</li>
                  <li>Angular</li>
                </ul>
                <div className="techSubTitle">
                  Misc.
                </div>
                <ul className="list">
                  <li>MySQL</li>
                  <li>AWS EC2 and Lambda</li>
                  <li>Docker</li>
                  <li>Ubuntu / Linux</li>
                  <li>Apache Tomcat</li>
                  
                </ul>                
              {/* <div className="techIcon">
                Hello
              </div> */}
              </div>
              

            </div>
        </>
    
    );

  }
}

export default Page2;