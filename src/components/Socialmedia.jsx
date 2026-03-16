import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
const Socialmedia = () => {
  return (
    <div className="social-media-container">
      <div className="icon">
        <a href="">
          <FaLinkedin />
        </a>
      </div>
      <div className="icon">
        <a href="">
          <FaGithub />
        </a>
      </div>
      <div className="icon">
        <a href="">
          <MdEmail />
        </a>
      </div>
      <div className="icon">
        <a href="">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Socialmedia;
