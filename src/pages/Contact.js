import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Get in touch</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <a href="https://github.com/NathanNaylor" className="footer">
            <img
              className="img-fluid"
              alt="Headshot"
              src="./Assets/Images/Bald Right Glasses.png"
              width="50px"
            />
            <span>@NathanNaylor</span>
          </a>
        </div>
        <div className="col-4">
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/NathanNaylor"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/nathan-naylor-463aa61a2/"
            >
              LinkedIn
            </a>
          </p>
          <p>nathannaylors@gmail.com</p>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Contact;
