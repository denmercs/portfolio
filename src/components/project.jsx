import React from "react";
import "./project.scss";

const Project = prop => {
  const {
    company_name,
    application,
    description,
    location,
    role
  } = prop.project;

  return (
    <>
      <div className="card">
        <h3>{company_name}</h3>
        <p>{application}</p>
        <p>{description}</p>
        <p>Location: {location}</p>
        <p>Role: {role}</p>
        <div
          className="video"
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            paddingTop: 25,
            height: 10
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            src="https://www.youtube.com/embed/KM4jNYUOg7Y"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </>
  );
};

export default Project;
