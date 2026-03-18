import React, { useState } from "react";
import projects from "../assets/projects.json";
import { FaExternalLinkAlt } from "react-icons/fa";
import images from "../assets/images";

const Projects = () => {
  const [more, setMore] = useState(false);
  return (
    <div id="projects" className={more?"project-container full":"project-container"}data-aos="fade-right">
      <h2 className="heading">Projects</h2>
      <div className="projects">
        {projects.projects.map((project, index) => {
          return (
            <div className="project" key={index} data-aos="fade-up" data-aos-delay="500">
              <img src={images
                [project.img]} alt="" />
              <div className="project-layer">
                <h4>{project.name}</h4>
                <p>{project.about}</p>
                <p>Tech:{project.tech}</p>
                <button className="icon" >
                  <a href={project.link}><FaExternalLinkAlt style={{fontSize:"30px"}} /></a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button className="more btn" onClick={() => setMore(!more)}>
        {more?"Less":"More"}
      </button>
    </div>
  );
};

export default Projects;
