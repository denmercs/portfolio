import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo - white.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ isTabletOrMobileDevice, isVisible, setIsVisible }) => {
  const updateModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo-img" className="logo-img" />
        </Link>
      </div>
      {isTabletOrMobileDevice ? (
        <div onClick={() => updateModal(isVisible)}>
          <GiHamburgerMenu className="sidebar-icon" />
        </div>
      ) : (
        <>
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <a
              href="https://resume.creddle.io/resume/it3l2sf6wbv"
              target="_blank"
              rel="noopener noreferrer"
              className="resume"
            >
              Resume
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
