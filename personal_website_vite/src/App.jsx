import { useState } from 'react'

import './App.css'

import Navbar from './components/navbar/navbar.jsx'
import Page1 from './components/page1/page1.jsx'
import Page2 from './components/page2/page2.jsx'
import Page3 from './components/page3/page3.jsx'

// import 'src\components\koala\koala.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page1'>
      <Page1 />
      <Page2 />
      <Page3 />
     
    </div>
    
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Navbar);

export default App
