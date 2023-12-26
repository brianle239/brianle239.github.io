import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Koala from './components/koala/koala.jsx'
import Glitch from './components/glitch/glitch.jsx'
import Page1 from './components/page1/page1.jsx'
import Wave_border from './components/wave_border/wave_border.jsx'
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
 
     
    </div>
    
  )
}

export default App
