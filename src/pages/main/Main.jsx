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
import { useState, useCallback, useEffect } from "react";
const titles = [
  "Full Stack Developer    ",
  "Fast Learner    ",
  "Hard worker    ",
];

export default function Main() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTitle(title + titles[index][count]);
      setCount(count + 1);
    }, 100);
    if (count > titles[index].length) {
      setTitle("");
      setCount(0);
      index < titles.length - 1 ? setIndex(index + 1) : setIndex(0);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <MainContainer>
        <ProfileImage src={profile}></ProfileImage>
        <Introduction>
          <Greeting>Hello,</Greeting>
          <JobTitle>I'm a {title}</JobTitle>
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
