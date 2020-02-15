import React from "react";
import Project from "../components/project";
import { Container, Row, Col } from "react-bootstrap";
import "./projects.scss";

const Projects = () => {
  let projects = [
    {
      id: 1,
      company_name: "CampRV",
      application: "CRUD system and Google maps integration",
      description: `A fully functional web application that allows users can get access and use these previously 
      unknown/unavailable sites, and Landowners get to cash in on otherwise dormant or underutilized land.`,
      location: "USA",
      role: "Full Stack Developer",
      source: "https://youtu.be/aRh1vqXKpQo"
    },
    {
      id: 2,
      company_name: "Safe Mother's, Safe Babies",
      application: "SMS Dispatch System and Admin Web Application",
      description: `Safe Mothers, Safe Babies (SAFE) believes that no woman should die while bringing life into the world, 
      and that no child should die when his/her life is just beginning. 
      The application will allow the mother to register her name and village, 
      the system will dispatch the closet driver via geolocation and notify the mother that the driver is coming. 
      For more information please watch the video. `,
      location: "Uganda, Africa",
      role: "Full Stack Developer",
      source: "https://www.youtube.com/embed/KM4jNYUOg7Y"
    },
    {
      id: 3,
      company_name: "Planful",
      application:
        "Where Wedding Planners Can Show Off Their Work And Newly Engaged Can Find The Perfect Planner For Their Special Day",
      description: `This is a build week project at Lambda School. The application will let the wedding planners show off 
      their work and newly engaged couple to perfectly plan their special day.`,
      role: "Full Stack Developer",
      source: "https://youtu.be/aRh1vqXKpQo"
    }
  ];

  return (
    <>
      <Container>
        <h2>Projects</h2>
        <div className="cards">
          {projects.map(project => (
            <>
              <Project project={project} key={project.id} />
            </>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Projects;
