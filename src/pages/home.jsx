import React from 'react';
import "../pages/home.scss";
import {Link} from "react-router-dom";

import {Container} from "@material-ui/core"
/**
 * PLAN is to import data from the backend 
 */

const Home = () => {
    return (
        <Container className="home">
            <img src={require("../assets/dennis.png")} alt="Dennis" className="home-img"/>
            <h1>Hi! I'm Dennis</h1>
            <Link>Coding</Link>
            <Link>Design</Link>
            <p>“Formal education will make you a living; 
                self-education will make you a fortune.”</p> 
        </Container> 
    )
}

export default Home;