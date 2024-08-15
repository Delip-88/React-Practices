import React from 'react'
import { useState,useEffect, useRef } from 'react'
function test() {
    const [count,setCount]=useState(0)
    const a = useRef(0)

    useEffect(()=>{
        a.current = a.current + 1;
        console.log(`The value of a is ${a.current}`)
    })
    useEffect(()=>{
        document.title=`You Clicked ${count} times`;
    },[count])
  return (
    <>
    The Count is : {count}
    <button onClick={()=>setCount(count+1)}>Click me</button>
    </>
  )
}

export default test