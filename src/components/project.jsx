import React from "react";
import { Animated } from "react-animated-css";
import { Card } from "antd";

const Project = (prop) => {
  const { Meta } = Card;
  const {
    company_name,
    application,
    description,
    location,
    role,
    source,
    repo,
    website,
    stack,
    api,
  } = prop.project;

  return (
    <Animated isVisible={true} className="animated bounce delay-4s">
      <div className="project">
        <Card className="project-card" hoverable>
          <div className="video-container photo-container">
            {/\.(gif|jpg|jpeg|tiff|png)$/i.test(source) ? (
              <img
                className="picture-container"
                src={source}
                alt="project image"
              />
            ) : (
              <iframe
                title="youtube"
                src={source}
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                autoPlay="0"
                rel="0"
                scrolling="no"
              />
            )}
          </div>
          <Meta title={company_name} description={description} />
          <div className="project-links">
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
              <p>Github</p>
            </a>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              <i className="fa fa-chrome" aria-hidden="true"></i>
              <p>Website</p>
            </a>
          </div>
        </Card>
      </div>
    </Animated>
  );
};

export default Project;

{
  /* <div className="card">
          <div className="card-info">
            <h4>{company_name}</h4>
            <p className="application">{application}</p>
            <div className="card-links">
              <a href={repo} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" aria-hidden="true"></i>
                <p>Github</p>
              </a>
              <a href={website} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-chrome" aria-hidden="true"></i>
                <p>Website</p>
              </a>
            </div>
            <p>{description}</p>
            <p>Location: {location}</p>
            <p>Role: {role}</p>
            <p>Stack: {stack}</p>
            {api !== "" ? <p>API/Library: {api}</p> : null}
          </div>
          <div className="video-container photo-container">
            {/\.(gif|jpg|jpeg|tiff|png)$/i.test(source) ? (
              <img
                className="picture-container"
                src={source}
                alt="project image"
              />
            ) : (
              <iframe
                title="youtube"
                src={source}
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                autoPlay="0"
                rel="0"
                scrolling="no"
              />
            )}
          </div>
        </div> */
}
