import React from "react";
import "../pages/home.scss";
import Code from "../components/Code";
import { Container } from "react-bootstrap";
import _ from "lodash";

const Home = () => {
  const CODE_LINES_COUNT = 100;

  return (
    <Container className="home">
      <div className="home-hero">
        <img
          src={require("../assets/dennis.png")}
          alt="Dennis"
          className="home-hero-img"
        />
      </div>
      <div className="MessageWrapper">
        <div className="Matrix">
          {_.times(CODE_LINES_COUNT).map((_, i) => (
            <Code key={i} />
          ))}
        </div>
      </div>
      <div className="message">
        <p>
          “Formal education will make you a living; self-education will make you
          a fortune.”
        </p>
      </div>
    </Container>
  );
};

export default Home;
