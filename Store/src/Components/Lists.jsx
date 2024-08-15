import React from 'react'
import b from '../Static/Images/b.jpeg';
import c from '../Static/Images/c.jpg';
import d from '../Static/Images/d.png';
import Card from './Card'
function Lists() {
  return (
   <>
     <Card url={b} title='Title 1' description='this is the description 1'/>
     <Card url={c} title='Title 2' description='this is the description 2'/>
     <Card url={d} title='Title 3' description='this is the description 3'/>
   </>
  )
}

export default Lists