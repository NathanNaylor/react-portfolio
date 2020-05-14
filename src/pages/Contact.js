import React from "react";

const Contact = () => {
  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Here are a few ways to contact me!</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col">
            <ul>
              <li>
                <p>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/NathanNaylor">
                    GitHub
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/nathan-naylor-463aa61a2/"
                  >
                    LinkedIn
                  </a>
                </p>
              </li>
              <li>
                <p>Email: nathannaylors@gmail.com</p>
              </li>
              <li>
                <p>Phone #: (858) 699-0973</p>
              </li>
            </ul>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
  );
};

export default Contact;
