// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   function handleLogin() {
//     setIsLoggedIn(true)
//   }
//   function handleLogout(){
//     setIsLoggedIn(false)
//   }
// const [isLoggedIn, setIsLoggedIn] = useState(false)
// return(
//  isLoggedIn ?  <>
//  <div className="div">
//   <h1>Welcome</h1>
//   <button onClick={handleLogout}>LogOut</button>
//  </div></> : <>
//  <div className="div">
//   <h2>Logg in </h2>
//   <button onClick={handleLogin}>Log In</button>
//  </div>
//  </>

// )
// }

// export default App


import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simulate a data fetch with a delay
    setTimeout(() => {
      const fetchedData = {
        user: {
          name: "Rohan Kisikebe",
          post: "Software Engineer, Nepal",
        }
      };
      setData(fetchedData);
      setIsLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>;
  }

  function handleOver() {
    const inputField = document.querySelector('.inputfield');
    const maxX = window.innerWidth - inputField.offsetWidth;
    const maxY = window.innerHeight - inputField.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    inputField.style.left = `${randomX}px`;
    inputField.style.top = `${randomY}px`;
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isLoggedIn ? (
        <>
          <h1>Welcome, {data.user.name}!</h1>
          <p>{data.user.post}</p>
          <input type="text" className='inputfield' placeholder='Hover over me' style={{position : 'absolute'}} onMouseOver={handleOver} />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default App;
