import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/NathanNaylor">
        <img
          className="img-fluid"
          alt="Headshot"
          src="./Assets/Images/Bald Right Glasses.png"
          width="50px"
        />
        <span>@NathanNaylor</span>
      </a>
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
            </ul>
    </div>
  );
};

export default Footer;
