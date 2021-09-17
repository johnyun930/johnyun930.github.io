import React from "react";
import {
  ContextContainer,
  Fulldiv,
  ProjectTitle,
  ProjectExplaination,
  SkillAdopted,
  SkillBox,
  SkillList,
  ViewButton,
  ProjectImage,
  YearText,
} from "./project.styles";
export const Project = (props) => {
  return (
    <>
      <ContextContainer>
        <Fulldiv>
          <YearText>{props.year}</YearText>
        </Fulldiv>
        <Fulldiv>
          <ProjectTitle>{props.projectTitle}</ProjectTitle>
          <ProjectExplaination>{props.explaination}</ProjectExplaination>
          <SkillAdopted>Critical Skills adopted:</SkillAdopted>
          <SkillBox>
            <ul>
              {props.skillList.map((skill) => (
                <SkillList>{skill}</SkillList>
              ))}
            </ul>
          </SkillBox>
          <ViewButton as="a" href={props.link}>
            View this Project
          </ViewButton>
        </Fulldiv>
      </ContextContainer>
      <Fulldiv>
        <ProjectImage src={props.image}></ProjectImage>
      </Fulldiv>
    </>
  );
};
