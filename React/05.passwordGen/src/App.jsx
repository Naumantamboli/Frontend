import { useState, useCallback } from 'react'

function App() {
const [length,setLength] = useState(8);
const [number,setNumber] = useState(false);
const [character,setCharacter] = useState(false);
const [password,setPassword] = useState("");

const passwordGenerator = useCallback()
  
  return (
    <>
      <h1 className='text-4xl text-center text-white mt-14'>Password generator</h1>
    </>
  )
}

export default App
