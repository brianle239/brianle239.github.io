import React, { Component, useRef, createRef, useState} from "react";
import { useInView } from 'react-intersection-observer';

import './page2.css'
import Wave_border_top from "../wave_borders/wave_border_top/wave_border_top.jsx";
function Page2() {
  
  // constructor(props) {
  //   super(props);
  //   this.changeProf = this.changeProf.bind(this);
  // }
  // const state = {
  //   isClicked: false,
  //   currentImage: './profile_picture_crop.jpg',
  // };

  const [currentImage, setCurrentImage] = useState('./profile_picture_crop.jpg');
  // var currentImage = './profile_picture_crop.jpg'
  const myRef = createRef();

  // If only one trigger triggerOnce:true
  // delay:100 reduced flickering
  const [ref1, inView1] = useInView({ threshold: 0.1, delay:200 });
  const [ref2, inView2] = useInView({ threshold: 0.1, delay:200 });
  const [ref3, inView3] = useInView({ threshold: 0.1, delay:200 });
  const [ref4, inView4] = useInView({ threshold: 0.1, delay:200 });
  const [ref5, inView5] = useInView({ threshold: 0.2, delay:200 });
  const [ref6, inView6] = useInView({ threshold: 0, delay:200});
  const [ref7, inView7] = useInView({ threshold: 0.2, delay:200 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const changeProf = () =>{
    if (!isTransitioning) {
      setIsTransitioning(true);
      if (!isClicked) {
        
        setIsClicked(true);
        setCurrentImage('./shirokuma.jpg');
        // currentImage = './shirokuma.jpg';
       
      }
      else {
        setIsClicked(false);
        setCurrentImage('./profile_picture_crop.jpg');
        // currentImage = './profile_picture_crop.jpg';
      }
      setTimeout(() => {
        setIsTransitioning(false);
      }, 2010); // Adjust timeout to match transition duration
      
    }
    else {
      console.log("transitioning");
    }
    // this.isTransitioning = false;
    
  };
  


 
    return (
        <>
            <div className="page2" ref={myRef}>
              <div className="profImage">
                <div className={`imageBackground ${inView6 ? ' imageBackgroundAnimate' : 'opacity_hide'}`} ref={ref7}>

                </div>  
                <img className={`selfImage ${inView6 ? ' fade_animation' : ''}`} ref={ref6} style={{ backgroundImage: `url(${currentImage})`, transition: "2s" }}>
                  
                </img>
                
              </div>
              <div className={`aboutMeText ${inView5 ? ' fade_animation' : 'opacity_hide'}`} ref={ref5}>
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
                  <div className="secret" onClick={changeProf}>
                    [How my friends see me]
                  </div>
                  
                  
              </div>
                 
            </div>
            <div className="techStack">
              
              <div className="techIntro border-right">
              <div className = {`${inView3 ? ' fade_animation' : 'opacity_hide'}`} ref={ref3}>
                <div className="currentTech">
                ~ My Expertise ~
                </div>
                <div className="techDesc">
                  I am always learning but so far, these are my favorite technologies I use. Of those listed, 
                  my first introduction to these technologies came from working on my projects listed below. Currently, I 
                  am working on personal projects involing AWS and React.
                </div>
                </div>
                <div className = {`${inView4 ? ' fade_animation' : 'opacity_hide'}`} ref={ref4}>
                <div className="learningTech">
                ~ Currently Learning ~
                </div>
                <div className="techDesc">
                    I am diving head into AI and machine learning by exploring regression and classification
                    models using Pytorch. I am slowly incorperating AI into my tech stack and taking any 
                    oppurtunity to apply AI in any of my projects.
                </div>
                </div>
              </div>
    
              <div className="techIconList">
                {/* <div className="techSubTitle"> 
                  Programming Languages
                </div> */}
                <ul className={`list ${inView1 ? ' fade_animation' : 'opacity_hide'}`} ref={ref1}>
                  <li>Python</li>
                  <li>C++</li>
                  <li>C</li>
                  <li>Java</li>
                  <li>MySQL</li>
                </ul >

                {/* <div className="techSubTitle">
                  Technologies
                </div> */}
                <ul className= {`list technology ${inView2 ? ' fade_animation' : 'opacity_hide'}`} ref={ref2}>
                  <li>React / Vue</li>
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

export default Page2;