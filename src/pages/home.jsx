import React from 'react';
import "../pages/home.scss";
import {Link} from "react-router-dom";
import {Container} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faGithub} from "@fortawesome/free-solid-svg-icons";
/**
 * PLAN is to import data from the backend 
 */

const Home = () => {
    return (
        <Container className="home">
            <img src={require("../assets/dennis.png")} alt="Dennis" className="home-img"/>
            <div className="home-btn">
                <Link>Coding</Link>
                <Link>Design</Link>
            </div>
            <h1>Hi! I'm Dennis</h1>
            
            <p>“Formal education will make you a living; 
                self-education will make you a fortune.”</p> 

            <div className="home-notes">
                <p>Technologies used on this site are: React, HTML, CSS, SASS, GIT, NPM. Github repo here: </p>
                <a href="https://github.com/denmercs/portfolio" target="_blank">
                    <FontAwesomeIcon className="f-awesome" icon="coffee" />
                </a>
            </div>
        </Container> 
    )
}

export default Home;