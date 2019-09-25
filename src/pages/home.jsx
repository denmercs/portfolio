import React from 'react';
import "../pages/home.scss";
import {Link} from "react-router-dom";
import {Container} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
/**
 * PLAN is to import data from the backend 
 */

const Home = () => {
    return (
        <Container className="home">
            <div className="home-hero">
                <Link to="/projects" className="home-hero-btn">	&lt;Coding&gt;</Link>
                <img src={require("../assets/dennis.png")} alt="Dennis" className="home-hero-img"/>
                <Link to="/designs" className="home-hero-btn">#Design</Link>
            </div>
            
            <p>“Formal education will make you a living; 
                self-education will make you a fortune.”</p> 

            <div className="home-notes">
                <p>Technologies used on this site are: HTML, CSS, SASS, React, Redux, Node, Axios, GIT, NPM. </p>
                <p> Github repo here: </p>
                <a href="https://github.com/denmercs/portfolio" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCoffee} className="f-coffee"/>
                </a>
            </div>
        </Container> 
    )
}

export default Home;