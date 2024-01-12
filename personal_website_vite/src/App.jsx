import { useState, useRef, createRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import './App.css'

import Parentheses from './components/navbar/navbar.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Page1 from './components/page1/page1.jsx'
import Page2 from './components/page2/page2.jsx'
import Page3 from './components/page3/page3.jsx'


// import 'src\components\koala\koala.jsx'


function App() {
  const [count, setCount] = useState(0)
  const one = createRef();
  const two = createRef();
  const three = createRef();

  const handleScrollToAbout = () => {
    console.log("Nope");
    one.current.scrollIntoView();
  };
  return (
    <div className='page1'>
      
      <Navbar name={one} id="test"/>
      
      
      <Page1 />
      <div>Nope</div>
      <div ref={one}></div>
      <Page2> </Page2>
      <Page3 />
      <div onClick={handleScrollToAbout}>
        Hello
      </div>
     
    </div>
    
  )
}


export default App
