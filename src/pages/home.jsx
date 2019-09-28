import React from 'react';
import "../pages/home.scss";
import {Container} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Code from "../components/Code";
import _ from "lodash";

const Home = () => {
    const CODE_LINES_COUNT = 100;

    return (
        <Container className="home">
            <div className="home-hero">
                <img src={require("../assets/dennis.png")} alt="Dennis" className="home-hero-img"/>
            </div>
            <div className="MessageWrapper">
                <div className="Matrix">
                    {_.times(CODE_LINES_COUNT).map((_, i) => <Code key={i} />)}
                </div>
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