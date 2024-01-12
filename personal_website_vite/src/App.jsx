import { useState, useRef } from 'react'
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
  const one = useRef(null);


  return (
    <div className='page1'>
      
      <Navbar name={one} id="test"/>
      
      
      <Page1 ref={one}/>
      <Page2 />
      <Page3 />
     
    </div>
    
  )
}


export default App
