// import { useState,useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import useCounter from './useHook'

// function App() {

//   const {count, increament, decreament, reset} = useCounter(100)
//   const [name, setName] = useState('')
//   const inputRef = useRef(null)
//   const handleSubmit = (e)=>{
//     e.preventDefault()
//     if(name.trim() === ''){
//       inputRef.current.focus();
//     }else{
//       console.log('form submitted ',name)
//     }
//   }
//   const handleChange = (e)=>{
//     setName(e.target.value)
  
//   }
//   return (
//     <>
//     <form action="" onSubmit={handleSubmit}> 
//       <label htmlFor="username">User Name <span style={{color :'red'}}>*</span></label>
//       {'  '}
//       <input type="text" name="username" id="username" ref={inputRef} value={name} onChange={handleChange} />
//       <button type="submit">Submit</button>


//     </form>
//     <p>{count}</p>
//     <button onClick={increament}>increament</button>
//     <button onClick={decreament}>decreament</button>
//     <button onClick={reset}>reset</button>
    
//     </>
//   )
// }

// export default App


import React, { useState, useRef } from 'react';

function ColorGenerator() {
  const [color, setColor] = useState('#FFFFFF'); // Default color is white
  const colorRef = useRef(color);

  // Function to generate a random hexadecimal color
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    colorRef.current = randomColor;
    setColor(randomColor);
  };

  // Function to copy the color code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(colorRef.current)
      .then(() => alert('Color code copied to clipboard!'))
      .catch(err => console.error('Failed to copy color code:', err));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
          margin: '0 auto',
          border: '1px solid #000',
        }}
      ></div>
      <h2>{color}</h2>
      <button onClick={generateRandomColor}>Generate Random Color</button>
      <button onClick={copyToClipboard}>Copy Color Code</button>
    </div>
  );
}

export default ColorGenerator;
