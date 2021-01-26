import React from "react";
import { Animated } from "react-animated-css";
import videoSource from "../assets/media/video.mp4";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Animated isVisible={true} className="animated bounce delay-4s">
        <div className="home">
          <div className="home-background">
            <video autoPlay muted loop id="myVideo">
              <source src={videoSource} type="video/mp4" />
            </video>
          </div>
          <div className="home-content">
            <h1>Hello, I'm Dennis Mercado.</h1>
            <p>I'm a full-stack web developer</p>
            <Button type="primary" className="home-button">
              <Link to="/projects">VIEW MY WORK</Link>
            </Button>
          </div>
        </div>
      </Animated>
    </>
  );
};

export default Home;
