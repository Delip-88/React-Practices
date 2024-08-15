import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavBar from './Components/NavBar'
import Crousel from './Components/Crousel';
import Home_Nav from './Components/Home_Nav';
import Lists from './Components/Lists';
import Footer from './Components/Footer';
import Test from './Components/Test';

function App() {

  return (
    <>
        <NavBar LogoTitle="MyStore"/>
        <Home_Nav/>
        <Crousel/>     
        <Test/>
        {/* <Lists/> */}

        <Footer/>
        
    </>
  )
}

export default App
