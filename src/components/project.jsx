import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { relative } from "path";

const Project = prop => {
  const [
    { company_name, application, description, location, role }
  ] = prop.projects;

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h3>{company_name}</h3>
            <p>{application}</p>
            <p>{description}</p>
            <p>{location}</p>
            <p>{role}</p>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Project;
