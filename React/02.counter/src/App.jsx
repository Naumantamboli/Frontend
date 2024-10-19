import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)   //hook

  // let counter = 5;

  const addValue = () =>{
    if(counter<20)
    setCounter(counter+1);
  }

  const decValue = () =>{
    if(counter>0)
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={decValue}
      >Decrease value {counter}</button>
    </>
  )
}

export default App
