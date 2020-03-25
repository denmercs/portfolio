import React, { useEffect } from "react";
import "./about.scss";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import GithubCalendar from "github-calendar";
import { getUser } from "../redux/actions/userActions";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

const About = props => {
  const { login, followers, public_repos } = props.dataUser.user;

  useEffect(() => {
    GithubCalendar(".calendar", "denmercs", {
      responsive: true
    });
    props.getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Animated isVisible={true} className="animated bounce delay-4s">
      <Container className="about">
        <div className="aboutGithub">
          <a href="https://github.com/denmercs" target="_blank">
            <h5>Github Handle: {login}</h5>
          </a>
          <p>Followers: {followers}</p>
          <p>Repositories: {public_repos}</p>
          <div className="calendar"></div>
        </div>
        <h3>About</h3>
        <div className="aboutStory">
          <p>
            I've always sought out opportunities for growth in my life. Born and
            raised in the Philippines, I studied nursing in college.
            Concurrently, I was working as a freelance graphic designer online
            and learning how to code in my spare time. I moved here in the
            United States in 2015, and I have been pursuing my passion and dream
            to become a Software Developer.
          </p>
          <p>
            I enrolled in a bootcamp called Lambda School to become a Full Stack
            Developer. Although my professional path has taken many twists and
            turns, from working in health informatics to becoming a small
            business owner and entrepreneur to being a Software Developer, I've
            never stopped studying and pursuing professional growth. I strive to
            use my skills in helping clients fulfill their business needs using
            IT.
          </p>
        </div>
      </Container>
    </Animated>
  );
};

const mapStateToProps = state => {
  return {
    dataUser: state.user
  };
};

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
