import React from "react";
import Node from "../../assets/images/nodejs.png";
import Database from "../../assets/images/database.png";
import TypeScript from "../../assets/images/typescript.png";
import react from "../../assets/images/atom.png";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {
  SkillContainer,
  Title,
  MainContainer,
  ItemBox,
  Icon,
  SkillTitle,
  SkillContext,
  SkillCard,
  ItemBoxBack,
  ItemContainer,
  SkillBoundary,
} from "./skills.styles";
import { Fulldiv } from "../../components/utills.styles";
const info = [
  { image: react, title: "React", proficient: 4 },
  { image: Node, title: "NodeJS", proficient: 4 },
  { image: TypeScript, title: "TypeScript", proficient: 3 },
  { image: Database, title: "MongoDB&MySQL", proficient: 3 },
];

export default function Skills() {
  return (
    <SkillContainer>
      <Title>John Yun's Main Skills</Title>
      <MainContainer>
        {info.map((data) => {
          let stars = [];
          for (let i = 0; i < 5; i++) {
            if (i < data.proficient) {
              stars.push(<StarIcon />);
            } else {
              stars.push(<StarBorderIcon />);
            }
          }
          return (
            <SkillCard>
              <SkillBoundary>
                <ItemBox>
                  <Fulldiv>
                    <Icon src={data.image}></Icon>
                  </Fulldiv>
                  <Fulldiv>
                    <SkillTitle>{data.title}</SkillTitle>
                    <SkillContext>{stars}</SkillContext>
                  </Fulldiv>
                </ItemBox>
                <ItemBoxBack>back</ItemBoxBack>
              </SkillBoundary>
            </SkillCard>
          );
        })}
      </MainContainer>
    </SkillContainer>
  );
}
