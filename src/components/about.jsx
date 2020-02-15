import React, { useEffect } from "react";
import "./about.scss";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import GithubCalendar from "github-calendar";
import { getUser } from "../redux/actions/userActions";
import { Animated } from "react-animated-css";

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
        <h3>About</h3>
        <div className="aboutStory">
          <p>
            I’ve always sought out opportunities and challenges in my life.
            Raise and born in The Philippines, studied nursing school in college
            at the same time doing free lance graphic design work online and
            learning how to code.
          </p>

          <p>
            Moved here in the United States on 2015, I have been pursuing my
            passion and dream to be a Software Developer. Enrolled in a bootcamp
            called Lambda School to learn more about Full Stack Developer
          </p>

          <p>
            Although my professional path has taken many twists and turns: from
            Health informatics to small business owner and entrepreneur to
            Software Developer. I’ve never stopped studying and continue to help
            others and solve problems.
          </p>
        </div>
        <div className="aboutGithub">
          <h5>Github Handle: {login}</h5>
          <p>Followers: {followers}</p>
          <p>Repositories: {public_repos}</p>
          <div className="calendar"></div>
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
