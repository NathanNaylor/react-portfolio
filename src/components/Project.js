import React from "react";

const Project = ({project}) => {
  return <div className="Wrap">
      <a href={project.live}>
      <img className="img-fluid size" alt="project screenshot" src={project.imageSrc} />
    </a>;
  </div>;
};

export default Project;
