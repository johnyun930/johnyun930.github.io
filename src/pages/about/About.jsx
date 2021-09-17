import React from "react";
import coding from "../../assets/images/coding.jpg";
import {
  AboutContainer,
  AboutColumn,
  Title,
  Context,
  ButtonBox,
  ResumeButton,
  ImageBox,
  Image,
} from "./About.styles";

const info = {
  title: "About John Yun",
  Context: `John Yun, moved to Vancouver, BC during adolescence. He quickly found his interest in programming and computer science when he was at his secondary school. He often enjoyed spending his free time surfing websites and opening developer mode to understand how they were constructed. To pursue his interest, he attended Douglas College and reinforced professional knowledge. During his college studies, his passion for programming led him to become a full stack developer.

    In 2020, John graduated from Douglas College with a dipoloma in Computer Studies and Information.

    He has studied and learnt extra programming some practical projects, so he is proficient at React and NodeJS.

    He is constantly working on improving his knowledge and skills on a daily basis, by subscribing Udemy and developing own projects especially on AREA. Nowaday, he is studying SocketIO, pythons for djanngo, AWS for clouding database.
    
    John's main stacks are MERN(React, NodeJS, Express, MongoDB), TypeScript, MySQL, JAVA. He is fluent in both English and Korean.`,
  img: coding,
};

export default function About() {
  return (
    <AboutContainer>
      <AboutColumn>
        <Title>{info.title}</Title>
        <Context>{info.Context}</Context>
      </AboutColumn>
      <AboutColumn>
        <ButtonBox>
          <ResumeButton href="https://drive.google.com/file/d/1zvyl9WuO788Rs8SEweTsVN54jgTgZSxr/view?usp=sharing">
            Download Resume
          </ResumeButton>
        </ButtonBox>
        <ImageBox>
          <Image src={info.img}></Image>
        </ImageBox>
      </AboutColumn>
    </AboutContainer>
  );
}
