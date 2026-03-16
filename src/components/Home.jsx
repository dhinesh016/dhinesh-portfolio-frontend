import React from 'react'
import Socialmedia from './Socialmedia'



const Home = ({show,handleShow}) => {
  console.log(show)
  return (
    <div id='home'  className='home-container'>
     <div className="intro" data-aos="fade-right" data-aos-delay="500">
       <h3>Hii I am <span>Dhinesh S</span></h3>
        <h1>Full Stack Developer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas debitis temporibus dolores magni asperiores cum repellat aperiam, doloribus et odio rerum, officia numquam velit, sunt incidunt. Maxime non laboriosam optio.</p>
        <Socialmedia/>
     </div>
     <div className='btn2'>
        <button onClick={handleShow}>{show ?"VIST ME":"GET BACK"}</button>
     </div>
    </div>
  )
}

export default Home