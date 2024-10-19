import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    name : "nauman",
    age : 20
  }

  let arr = [1,2,3,4];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind test</h1>
      <Card username="Nauman" country="India" role="Web developer" />
      <Card username="Farhat" country="America" role="Tester"/>
    </>
  )
}

export default App
