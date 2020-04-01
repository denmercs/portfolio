import React from "react";
import Project from "../components/project";
import { Container } from "react-bootstrap";
import "./projects.scss";

const Projects = () => {
  let projects = [
    {
      id: 1,
      company_name: "Denmercs Photography LLC",
      application: "Wedding Photographer Website",
      description: `
      A fully functional web application that allows wedding clients to inquire about prices and view portfolio images and visible mapping coordinates; integration of Facebook Graph API for portfolio albums.
      `,
      location: "Sun Prairie, Wisconsin USA",
      role: "Full Stack Developer",
      source: "https://www.youtube.com/embed/74s7Y6dVs9I",
      repo: "https://github.com/denmercs/denmercsphotography-fe",
      website: "https://www.denmercs.com",
      direction: "left",
      stack: "React JS | Redux | Express JS | PostgreSQL",
      api: "Facebook Graph, Geocode, MapGL - Uber"
    },
    {
      id: 2,
      company_name: "Safe Mother's, Safe Babies",
      application: "SMS Dispatch System and Admin Web Application",
      description: `Safe Mothers, Safe Babies is a nonprofit organization based in Uganda, East Africa. This application allows Ugandan mothers to request trained emergency drivers for safe transport to hospitals via text message (SMS). 
      For more information please watch the video. `,
      location: "Uganda, Africa",
      role: "Full Stack Developer",
      source: "https://www.youtube.com/embed/KM4jNYUOg7Y",
      repo: "https://github.com/labs17-s-a-f-e",
      website: "https://bit.ly/2UREDVN",
      direction: "right",
      stack: "React JS | Redux | Express JS | PostgreSQL.",
      api: "Frontline SMS, Reverse Geocoding, Redux persist"
    }
  ];

  return (
    <Container className="projects">
      <h3>Real Projects</h3>
      <div className="cards">
        {projects.map(project => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
