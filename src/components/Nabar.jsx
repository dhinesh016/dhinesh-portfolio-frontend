import React, { useState } from "react";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Mylogo from "./Mylogo";
import mycv from "../assets/cv.pdf"
const Nabar = () => {
  const[show,setShow]=useState(false);
  let handleShow=()=>
  {
    setShow(!show)
  }
  return (
    <div className="nav-container">
      <div className="open-menu" onClick={handleShow}>
        <IoMenu style={{fontSize:"30px",fontWeight:"bold"} }/>
      </div>
      <div className="logo">
        <Mylogo />
      </div>
      <div className="nav-list">
        <ul className={show?"show":""}>
          <div className="close-menu" onClick={handleShow}>
            <IoMdClose style={{fontSize:"30px",fontWeight:"bold"}} />
          </div>
          <li>
           <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="btn">
        <a href={mycv} download={"Dhinesh Resume"}><button>
          <RiDownloadCloud2Fill
            style={{
              color: "red",
              fontSize: "18px",
              marginRight: "4px",
              textAlign: "center",
            }}
          />
          Download CV
        </button></a>
      </div>
    </div>
  );
};

export default Nabar;
