import React, { useState } from "react";
import skills from "../assets/skills";
import images from "../assets/images"

const Skills = () => {
  const [active, setactive] = useState(true);
  console.log(skills.frontend);
  return (
    <div>
      <div id="skills" className="skill-container" data-aos="zoom-out">
        <h2 className="heading">Skills</h2>
        <div className="skills-head">
          <h3
            className={active ? "s-active" : ""}
            onClick={() => {
              setactive(!active);
            }}
          >
            Frontend Technologys
          </h3>
          <h3
            className={!active ? "s-active" : ""}
            onClick={() => {
              setactive(!active);
            }}
          >
            Backend Technology
          </h3>
        </div>
        <div
          className="skill-list"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          {active
            ? skills.frontend.map((value, index) => {
                return (
                  <div className="skill" key={index}>
                    <img src={images[value.img]} alt="" />
                    <h5>{value.name}</h5>
                    <div className="layer"></div>
                  </div>
                );
              })
            : skills.backend.map((value, index) => {
                return (
                  <div className="skill" key={index}>
                    <img src={images[value.img]} alt="" />
                    <h5>{value.name}</h5>
                    <div className="layer"></div>
                  </div>
                );
              })}
        </div>
         <div className="skills-head">
          <h3>Tools</h3>
         </div>
        <div className="skill-list tool">
          {skills.tools.map((tool, index) => {
            return (
              <div className="skill" key={index}>
                <img src={images[tool.img]} alt="" />
                <h5>{tool.name}</h5>
                <div className="layer"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
