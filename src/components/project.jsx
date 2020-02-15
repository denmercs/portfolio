import React from "react";
import "./project.scss";
import { Container } from "react-bootstrap";

const Project = prop => {
  const {
    company_name,
    application,
    description,
    location,
    role,
    source,
    repo,
    website
  } = prop.project;

  return (
    <Container className="project">
      <div className="card">
        <div className="card-info">
          <h4>{company_name}</h4>
          <p className="application">{application}</p>
          <p>{description}</p>
          <p>Location: {location}</p>
          <p>Role: {role}</p>

          <div className="card-links">
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <i class="fa fa-github" aria-hidden="true"></i>
              <p>Github</p>
            </a>
            <a href={website} target="_blank" rel="noopener noreferrer">
              <i class="fa fa-chrome" aria-hidden="true"></i>
              <p>Website</p>
            </a>
          </div>
        </div>
        <div className="video-container">
          <iframe
            src={source}
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            autoplay="0"
          />
        </div>
      </div>
    </Container>
  );
};

export default Project;
