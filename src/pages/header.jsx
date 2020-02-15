import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo - white.png";
import "./header.scss";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Navbar collapseOnSelect expand="lg" variant="dark" expand="lg">
          <Navbar.Brand href="/" expand="md" variant="brand">
            <div className="logo">
              <img src={Logo} alt="logo-img" className="logo-img" />
              <h1 className="logo-name">Dennis Mercado</h1>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
            </Nav>
            <a
              href="https://resume.creddle.io/resume/it3l2sf6wbv"
              target="_blank"
              rel="noopener noreferrer"
              className="resume"
            >
              Resume
            </a>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
