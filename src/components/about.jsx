import React from "react";
import { Animated } from "react-animated-css";
import imageSource from "../assets/dennis.png";

const About = () => {
  return (
    <Animated isVisible={true} className="animated bounce delay-4s">
      <div className="about">
        <h2>About</h2>
        <div className="about-content">
          <div className="about-content-image">
            <img src={imageSource} alt="dennis picture" />
          </div>
          <div className="about-content-story">
            <p>
              I've always sought out opportunities for growth in my life. Born
              and raised in the Philippines, I studied bachelor of arts in
              college. I was working as a freelance graphic designer online at
              that time and while learning how to code in my spare time. I moved
              here in the United States in 2015, and I have been pursuing my
              passion and dream to become a Software/Web Developer since then.
            </p>
            <p>
              I enrolled in a bootcamp called Lambda School to become a Full
              Stack Software Developer. Although my professional path has taken
              many twists and turns. I've never stopped learning and pursuing
              professional software development career.
            </p>
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default About;
