import React, {useEffect, useState, useRef} from 'react'

function App() {
  const [name,setName] = useState('')
  const prevName = useRef('')
  
  useEffect(() => {
    prevName.current = name
  },[name])
  
  return (
    <>
    <input value={name} onChange={e => setName(e.target.value)}/>
    <div>My name is {name} and is to be {prevName.current}</div>

    </>
  )
}

export default App