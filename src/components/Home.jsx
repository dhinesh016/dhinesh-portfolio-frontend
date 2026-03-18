import React from 'react'
import Socialmedia from './Socialmedia'

const Home = ({show,handleShow}) => {
  return (
    <div id='home'  className='home-container'>
     <div className="intro" data-aos="fade-right" data-aos-delay="500">
       <h3>Hii, I am <span>Dhinesh S</span></h3>
        <h1 >Full Stack Developer</h1>
        <p>A passionate Full Stack Developer with a strong foundation in Java, Spring Boot, and modern web technologies. I enjoy building real-world applications and continuously improving my skills in software development and problem-solving</p>
        <Socialmedia/>
     </div>
     <div className='btn2'>
        <button onClick={handleShow}>{show ?"VIST ME":"GET BACK"}</button>
     </div>
    </div>
  )
}

export default Home