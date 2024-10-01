import React , { useRef} from 'react'

const StyleElement = () => {
const colorparagraph = useRef(null);
const colors = ['green' , 'red', 'violet', 'darkblue','yellow' , 'orange']


const stylePragrph = () =>{
  const randomColor = Math.floor(Math.random()* colors.length);
  colorparagraph.current.style.color = colors[randomColor];
}


  return (
    <div>
      <button onClick={stylePragrph}> click me</button>
      <p ref={colorparagraph}> usage of useRef Hook </p>
    </div>
  )
}

export default StyleElement