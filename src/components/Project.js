import React from "react";

const Project = ({ project }) => {
  return (
    <div className="mb-3 col-sm-12 col-md-6 ">
      <div className="wrap ">
        <div className="Wrap">
          <a href={project.live} target="_blank" rel="noopener noreferrer"> 
            <img
              className="img-fluid size"
              alt="project screenshot"
              src={project.imageSrc}
              width="250px"
            />
          </a>
          <a href={project.repo} target="_blank" rel="noopener noreferrer"><h2>{project.name} Repo</h2></a>
        </div>
      </div>
    </div>
  );
};

export default Project;
