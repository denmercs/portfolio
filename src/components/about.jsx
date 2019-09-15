import React from 'react';
import "./about.scss";
import {Container} from "@material-ui/core";
import axios from "axios";


const About = () => {
    
    return (
        <div className="about">
            <Container maxWidth="md" className="about-me">
                <h3>About</h3>
                <p>I’ve always sought out opportunities and challenges in my life. </p>
                <div>
                    <p>Raise and born in The Philippines, studied nursing school in college 
                        at the same time doing free lance graphic design work online and learning how to code.</p>
                </div>
                <div>
                    <p>Moved here in the United States on 2015, I have been pursuing my passion and dream to be a Software Developer.</p>
                    <p>Enrolled in a bootcamp called Lambda School to learn more about Full Stack Developer</p>
                </div>
                <p>Although my professional path has taken many twists and turns:
                    <ul>
                        <li>from Health informatics to small business owner and entrepreneur to Software Developer</li>
                        <li>I’ve never stopped studying and continue to help others and solve problems.</li>
                    </ul>
                </p>
            </Container>
            <Container className="about-github">
               
            </Container>
        </div>
    )
}

export default About;