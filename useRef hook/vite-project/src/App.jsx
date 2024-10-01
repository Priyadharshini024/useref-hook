import React, { useRef, useState } from 'react'

function App() {
  
  const inputRef = useRef();
  const TextRef = useRef("Initial Text");
  const [DisplayText , setDisplayText] = useState();

  const FocusInput = () => {
    inputRef.current.focus()
    setDisplayText(inputRef.current?.value)
  }

  return (
    <div>
      <h1>App in useref</h1>
      <input ref = {inputRef} type="text" />
      <button onClick={FocusInput}>Focus Input</button> <br></br>
      <p>{DisplayText}</p>
    </div>
  )
}

export default App