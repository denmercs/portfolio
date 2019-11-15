import React, { useEffect } from "react";
import "./about.scss";
import { connect } from "react-redux";
import { Container, Media } from "react-bootstrap";
import GithubCalendar from "github-calendar";

const About = props => {
  const { avatar_url, name, followers, public_repos } = props.dataUser.user;

  useEffect(() => {
    GithubCalendar(".calendar", "denmercs", {
      responsive: true
    });
  }, []);
  return (
    <div className="about">
      <Container maxWidth="md" className="aboutStory">
        <h3>About</h3>
        <p>I’ve always sought out opportunities and challenges in my life. </p>
        <div>
          <p>
            Raise and born in The Philippines, studied nursing school in college
            at the same time doing free lance graphic design work online and
            learning how to code.
          </p>
        </div>
        <div>
          <p>
            Moved here in the United States on 2015, I have been pursuing my
            passion and dream to be a Software Developer.
          </p>
          <p>
            Enrolled in a bootcamp called Lambda School to learn more about Full
            Stack Developer
          </p>
        </div>
        <p>
          Although my professional path has taken many twists and turns: from
          Health informatics to small business owner and entrepreneur to
          Software Developer
        </p>
        <p>
          I’ve never stopped studying and continue to help others and solve
          problems.
        </p>
      </Container>
      <Container className="aboutGithub">
        <h3>Github Account</h3>
        <h5>{name}</h5>
        <p>Followers: {followers}</p>
        <p>Repositories: {public_repos}</p>
        <div class="calendar"></div>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dataUser: state.user
  };
};

export default connect(mapStateToProps)(About);
