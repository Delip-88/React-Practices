import React from 'react';
import { BrowserRouter as  Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Components/Home.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import NotFound from './Components/NotFound.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx';
function App() {
  return (
    <Router>
      <div className="home">
        <Header/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>

    </Router>
  )
}

export default App