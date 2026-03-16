import React, { useEffect, useState } from 'react'
import Nabar from './Nabar'
import {Outlet} from "react-router-dom"
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import Footer from './Footer'

const Layout = () => {
  let[show,setShow]=useState(true);
   function  handleShow(){
      setShow(!show)
  }
  return (
    <div>
       <Nabar/>
      <div className={show?"banner active":"banner"}>
        <Home handleShow={handleShow} show={show} />
      </div>
      <div className={!show?"main-container":"banner"}>
        <Home handleShow={handleShow} show={show}/>
        <About/>
        <Skills />
        <Projects/>
        <Contact/>
        <Footer/>
        </div>
     
    </div>
  )
}

export default Layout