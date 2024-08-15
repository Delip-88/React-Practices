import React from 'react'

function Skills() {
const skills = ['HTML', 'CSS', 'Javascript','React','PHP','MYSQL']
const skillList = skills.map((skill)=>(
  <>
  <li key={skill}>{skill}</li>
  </>
))
  return (
    <>
    <ul>
      {skillList}
    </ul>
    </>
  )
}

export default Skills