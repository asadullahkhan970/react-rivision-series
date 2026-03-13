import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 
  // let counter = 15; 
  const [counter,setCounter] = useState(15)
  const addValue = ()=>{
    setCounter(counter+1);
  }

  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Khan Coding</h1>
    <h2>Counter Value: {counter} </h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
