import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Project = ({ project }) => {
  const [modal, setModal] = useState(false);
  const [opacity, setOpacity] = useState(true);
  
  const toggle = () => setModal(!modal);
  const mouseEnter = () => {
    console.log("Enter");
    setOpacity("0.5")
  }
  const mouseLeave = () => {
    console.log("Leave");
    setOpacity("1")
  }
  
  return (
    <div className="mb-3 col-sm-12 col-md-6 col-lg-4 ">
          <div style={{opacity: opacity}}>
            <img
              className="img-fluid size projectImg"
              alt="project screenshot"
              src={project.icon}
              width="250px"
              height="250px"
              onClick={toggle}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            /> 
          </div>
            <div className="container">
              <Modal
                size="lg"
                style={{ maxWidth: "100VW", width: "80%" }}
                isOpen={modal}
                toggle={toggle}
                className={"className"}
              >
                <ModalHeader toggle={toggle}>{project.name}</ModalHeader>
                <ModalBody>
                  <div className="row">
                    <div className="col-6">
                      <img
                        alt="project screenshot"
                        src={project.imageSrc}
                        width="100%"
                        style={{ float: "left", margin: "50px 100px 50px 0" }}
                      />
                    </div>
                    <div className="col-6">
                      <h4
                        style={{ float: "left", margin: "50px 100px 50px 0" }}
                      >
                        {project.description}
                      </h4>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="white" onClick={toggle}>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Link
                    </a>
                  </Button>{" "}
                  <Button color="white" onClick={toggle}>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name} Repo
                    </a>
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
        </div>
  );
};


export default Project;
