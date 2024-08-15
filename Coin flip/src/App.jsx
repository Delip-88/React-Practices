import { useState } from 'react'
import './App.css'
import head from './img/head.png'
import tail from './img/tail.png'


function App() {
  const [res, setRes] = useState(null)
  const [score,setScore] = useState({head : 0, tail : 0})
  const [flipping, setFlipping] = useState(false)

  const handleFlip =()=>{
    setFlipping(true)
    setTimeout(() => {
      const flip = Math.round(Math.random())
      setRes(flip)
      setScore(prevScore => ({...prevScore, [flip === 0 ? 'head': 'tail']:prevScore[flip === 0 ? 'head' : 'tail']+1}))
      setFlipping(false)
    }, 1000);
   
  }
  const ShowImg =({result})=>{
    const imageUrl = result=== 0? head : tail
    return(
      <>
      <img src={imageUrl} style={{width :'50px' , height :'50px'}} alt='coin image' />
      </>
    )
  }
  return ( 
    <>
      <h1>Let's <span style={{color : 'yellow'}}>flip</span>  a coin</h1>
      <button onClick={handleFlip} disabled={flipping}>{flipping ? <div class="loader"></div>: 'Flip Me'}</button>
      <br />

      {res !== null &&   <ShowImg result={res}/>}

    
      <br />
      <p>Out of {score.head+score.tail}, there have been {score.head} heads and {score.tail} tails</p>
    </>
  )
}

export default App
