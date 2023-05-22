import React from "react";
import "./aboutPage.css";
import AboutIntro from "../../components/about/AboutIntro";
import AboutImg from "../../components/about/AboutImg";

const About = () => {
  return (
    <div className='aboutPage'>
      <AboutIntro />
      <AboutImg />
    </div>
  );
};

export default About;
