import React from "react";
import profile from "../../assets/images/JongHunYun.jpg";
import {
  MainContainer,
  ProfileImage,
  Introduction,
  Greeting,
  JobTitle,
  ShortIntroduction,
  IntroHeading,
  Context,
  DirectionButton,
} from "./main.styles";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <MainContainer>
        <ProfileImage src={profile}></ProfileImage>
        <Introduction>
          <Greeting>Hello,</Greeting>
          <JobTitle>I'm a Full Stack Devleoper</JobTitle>
          <ShortIntroduction>
            <IntroHeading>A Bit About Me</IntroHeading>
            <Context>
              John is passionate and keen. He is a quick leaner and
              problem-solver. He likes learning more and improving himself.
            </Context>
            <Link to="/about">
              <DirectionButton>About</DirectionButton>
            </Link>
            <Link to="/skill">
              <DirectionButton color={(props) => props.theme.buttonColors.pink}>
                Skills
              </DirectionButton>
            </Link>
            <Link to="/project">
              <DirectionButton
                color={(props) => props.theme.buttonColors.purple}
              >
                Projects
              </DirectionButton>
            </Link>
          </ShortIntroduction>
        </Introduction>
      </MainContainer>
    </>
  );
}
