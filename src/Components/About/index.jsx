import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  AboutAPIContainer,
  AboutContainer,
  AboutContentContainer,
  AboutContentHeader,
  AboutContentText,
  AboutH1,
  AboutP,
  AboutPH3,
  AboutPH4,
} from "./AboutStyled";
import AboutContent from "./AboutContent.json";

const About = ({ toggle, isOpen }) => {
  return (
    <AboutContainer>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <AboutContentContainer>
        <AboutContentHeader>
          <AboutH1>{AboutContent.AboutTitle}</AboutH1>;
        </AboutContentHeader>
        <AboutContentText>
          <AboutPH3>SPA's Project</AboutPH3>
          <AboutP>{AboutContent.AboutP}</AboutP>
        </AboutContentText>
        <AboutAPIContainer>
          <AboutPH4>About EDAMAM's</AboutPH4>
          <AboutP>{AboutContent.AboutAPI}</AboutP>
        </AboutAPIContainer>
      </AboutContentContainer>
    </AboutContainer>
  );
};

export default About;
