import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Page1 from './components/page1/page1.jsx'

import Page2 from './components/page2/page2.jsx'
import Page3 from './components/page3/page3.jsx'
// import 'src\components\koala\koala.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page1'>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Greetings</h2>
      <h1>Brian Le</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      
      <Page1 />
      <Page2 />
      <Page3 />
     
    </div>
    
  )
}

export default App
