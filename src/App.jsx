import React, { useEffect, useState } from "react";
import Nabar from "./components/Nabar";
import "./style.css";
import Layout from "./components/Layout";
import AOS from "aos" ;
import "aos/dist/aos.css";
import Loading from "./components/Loading";

const App = () => {
   const[load,setLoad]=useState(true);
   useEffect(()=>{
     AOS.init({
        duration:1000,
        once:false,
        
     })
    AOS.refresh();
    setInterval(
      ()=>{
        setLoad(false)
      },3000
    )
  },[])
  return(
     <div>
      {load? <Loading/>:<div className="app" data-aos="fade-down"> 
      <Layout/> </div>}
     
      </div>
  );
};

export default App;
