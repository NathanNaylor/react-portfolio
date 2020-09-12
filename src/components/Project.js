import React, { useState }  from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Project = ({ project }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="mb-3 col-sm-12 col-md-6 ">
      <div className="wrap ">
        <div className="Wrap">
          <a href={project.live} target="_blank" rel="noopener noreferrer"> 
          <div>
            <img
                className="img-fluid size"
                alt="project screenshot"
                src={project.imageSrc}
                width="250px"
                onClick={toggle}
              />
            <Modal isOpen={modal} toggle={toggle} className={"className"}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                Live link: {project.live}
              </ModalBody>
              <ModalFooter>
                <Button color="white" onClick={toggle}><a href={project.live} target="_blank" rel="noopener noreferrer">Live Link</a></Button>{' '}
                <Button color="white" onClick={toggle}><a href={project.repo} target="_blank" rel="noopener noreferrer">{project.name} Repo</a></Button>
              </ModalFooter>
            </Modal>
    </div>
            
          </a>
          <a href={project.repo} target="_blank" rel="noopener noreferrer"><h2>{project.name} Repo</h2></a>
        </div>
      </div>
    </div>
  );
};

export default Project;
