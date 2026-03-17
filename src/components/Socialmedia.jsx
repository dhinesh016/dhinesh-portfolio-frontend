import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
const Socialmedia = () => {
  return (
    <div className="social-media-container">
      <div className="icon">
        <a href="https://www.linkedin.com/in/dhinesh-s-b50550250/">
          <FaLinkedin />
        </a>
      </div>
      <div className="icon">
        <a href="https://github.com/dhinesh016">
          <FaGithub />
        </a>
      </div>
      <div className="icon">
        <a href="mailto:wwwskd007@gmail.com">
          <MdEmail />
        </a>
      </div>
      <div className="icon">
        <a href="https://www.instagram.com/crazy_dhini/">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Socialmedia;
