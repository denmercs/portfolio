import React from "react";
import Project from "../components/project";
import { Container } from "react-bootstrap";
import "./projects.scss";

const Projects = () => {
  let projects = [
    {
      id: 1,
      company_name: "CampRV",
      application: "CRUD system with Google Maps API integration",
      description: `CampRV is a fictional company that connects land owners and 5th wheel / RV owners. 
      RV parks are often cramped and in many areas are booked months in advance. Collectively, landowners hold vast swaths of unused land 
      that could be earning them revenue.  By using CampRV, RV Owners get  access to use these previously unknown/unavailable sites, 
      and Landowners get to cash in on otherwise dormant or underutilized land.`,
      location: "USA",
      role: "Full Stack Developer",
      source: "https://youtu.be/aRh1vqXKpQo",
      repo: "www.google.com",
      website: "www.google.com",
      direction: "left"
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
      source: "https://www.youtube.com/embed/KM4jNYUOg7Y",
      repo: "https://github.com/labs17-s-a-f-e",
      website: "https://bit.ly/2UREDVN",
      direction: "right"
    },
    {
      id: 3,
      company_name: "Planful",
      application: "Fully functional CRUD web application",
      description: `This is a buildweek project at Lambda School. The application will let the wedding planners show off 
      their work and newly engaged couple to perfectly plan their special day. `,
      location: "USA",
      role: "Front End Developer",
      source: "https://youtu.be/aRh1vqXKpQo",
      repo: "https://github.com/bwj19-wedding-planner-portfolio",
      website: "https://fervent-yalow-1663cf.netlify.com/",
      direction: "left"
    }
  ];

  return (
    <Container className="projects">
      <h3>Projects</h3>
      <div className="cards">
        {projects.map(project => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
