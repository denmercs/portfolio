import React from "react";
import Project from "../components/project";
import { Container, Row } from "react-bootstrap";

const Projects = () => {
  let projects = [
    {
      id: 1,
      company_name: "Safe Mother's, Safe Babies",
      application: "SMS Dispatch System and Admin Web Application",
      description: `Safe Mothers, Safe Babies (SAFE) believes that no woman should die while bringing life into the world, 
      and that no child should die when his/her life is just beginning. 
      The application will allow the mother to register her name and village, 
      the system will dispatch the closet driver via geolocation and notify the mother that the driver is coming. 
      For more information please watch the video. `,
      location: "Uganda, Africa",
      role: "Front and Back End Engineer"
    },
    {
      id: 2,
      company_name: "FDJ ROSMAR CORP.",
      application: "Tracking Web Platform for the truck fleet",
      description: `This application will allow the company to track their installed GPS devices to each of their fleet.
      The application will let allow the company to increase their sales and can dispatch any truck who is nearer in the area.`,
      role: "Front and Back End Engineer"
    }
  ];

  return (
    <>
      <Container>
        <h2>Real Projects</h2>
        {projects.map(project => (
          <>
            <Container>
              <Row>
                <Project projects={projects} key={project.id} />
              </Row>
            </Container>
          </>
        ))}
      </Container>
    </>
  );
};

export default Projects;
