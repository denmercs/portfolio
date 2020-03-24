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
      A fully functional web application that allows wedding clients to inquire, message the photographer through the chatbox, and with the integration of Facebook Graph API for portfolio albums.
      All the UI, Graphics, and Pictures were created by Dennis Mercado. This is a real project built with Backend and Front End development in mind.
      `,
      location: "USA",
      role: "Full Stack Developer",
      source: "https://youtu.be/aRh1vqXKpQo",
      repo: "https://github.com/denmercs/denmercsphotography-fe",
      website: "www.denmercs.com",
      direction: "left",
      stack: "React JS | Redux | Express JS | PostgreSQL",
      api: "Facebook Graph, Geocode, MapGL - Uber, React Chatbot"
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
      direction: "right",
      stack: "React JS | Redux | Express JS | PostgreSQL.",
      api: "Frontline SMS, Reverse Geocoding, Redux persist"
    },
    {
      id: 3,
      company_name: "5th Wheel",
      application: "Software for campers",
      description: `A fully functional web application 
      that allows users can get access and use these previously unknown/unavailable sites, 
      and Landowners get to cash in on otherwise dormant or underutilized land.
      This is a personal project built with Backend and Front End development in mind. 
      Developed full-stack web applications with processed, analyzed and rendered data visually.
      Planned, wrote and executed the file structure for the application and setup Redux as the state management tool. 
      Styled components and connect the Redux state in the web application.
      Researched color theory and came up with a color palette appropriate for this project.`,
      location: "USA",
      role: "Front End Developer",
      source: "https://s5.gifyu.com/images/FifthDemo.93311408.gif",
      repo: "https://github.com/buildweek-5th-wheel",
      website: "https://5th-wheel.now.sh/",
      direction: "left",
      stack: "React JS | Redux | Express JS | PostgreSQL.",
      api: ""
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
