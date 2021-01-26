import React from "react";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaEnvelopeSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact</h3>
      <div className="icon">
        <IconContext.Provider value={{ size: "3rem", color: "#161a21" }}>
          <FaLinkedin />
          <p>linkedin.com/in/denmercs/</p>
        </IconContext.Provider>
      </div>
      <div className="icon">
        <IconContext.Provider value={{ size: "3rem", color: "#161a21f" }}>
          <FaGithub />
          <p>https://github.com/denmercs</p>
        </IconContext.Provider>
      </div>
      <div className="icon">
        <IconContext.Provider value={{ size: "3rem", color: "#161a21" }}>
          <FaEnvelopeSquare />
          <p>denmercs@gmail.com</p>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Contact;
