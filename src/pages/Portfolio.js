import React from "react";
import Project from "../components/Project";
import projects from "../projects.json";

const Portfolio = () => {
  function renderProj() {
    console.log("Hello")
    return projects.map((project) => (
      <Project key={project.id} project={project} />
      ));
  };
  return (
    <div id="portContainer " className="container ">
      <div className="row ">
        <div className="col-8 ">
          <h1>Projects</h1>
          <div className="row ">{renderProj()}</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
