import React, { Component} from "react";
import './page2.css'
import Wave_border_top from "../wave_borders/wave_border_top/wave_border_top.jsx";
class Page2 extends Component {
  
  constructor(props) {
    super(props);
    this.changeProf = this.changeProf.bind(this);
  }

  state = {
    isClicked: false,
    currentImage: 'src/assets/profile_picture_crop.jpg'
  };

  isTransitioning = false;
  

  changeProf() {
    
    if (!this.isTransitioning) {
      this.isTransitioning = true;
      if (this.state.isClicked) {
        this.setState({
          isClicked: false,
          currentImage: 'src/assets/shirokuma.jpg'
          
        });
      }
      else {
        this.setState({
          isClicked: true,
          currentImage: 'src/assets/profile_picture_crop.jpg',
          
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
            <div className="page2">
              <div className="profImage">
                <img className="selfImage" style={{ backgroundImage: `url(${this.state.currentImage})`, transition: "2s" }}>
                    
                </img>
              </div>
              <div className="aboutMeText">
                  Aspiring software developer/engineer in Los Angeles 
                  <br />
                  <br />

                  Computer Science undergraduate at University of California, Irvine 
                  with an expected graduation date of June 2025. ZOT ZOT ZOT!!!
                  <br />
                  <br />

                  You can probably find me at any of UCI's hackathons :D
                  <br />
                  <br />

                  Favorite language: C++
                  <br />
                  Most recent languaged learned: Prolog
                  <br />
                  <br />
                  <div className="secret" onClick={this.changeProf}>
                    [How my friends sees me as]
                  </div>
                  
                  
              </div>
                 
            </div>
            
        </>
    
    );

  }
}

export default Page2;