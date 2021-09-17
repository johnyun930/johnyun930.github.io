import styled from "styled-components";

export const ViewButton = styled.a`
  display: inline-block;
  width: 230px;
  margin-right: 20px;
  margin-top: 20px;
  height: 55px;
  background-color: ${(props) => props.theme.buttonColors.pink};
  box-shadow: 3px 5px ${(props) => props.theme.colors.lightblue};
  text-align: center;
  line-height: 3.3rem;
  color: white;
  font-size: 1.2rem;
  border-radius: 20px;
`;
export const YearText = styled.h3`
  padding-top: 10px;
  font-size: 1.3rem;
`;

export const ContextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% 60%;
`;
export const Fulldiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: ${({ direction }) => (direction ? "right" : "left")};
`;
export const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;
export const ProjectExplaination = styled.p`
  line-height: 1.8;
  font-size: 1.1rem;
  margin-top: 40px;
  font-family: ${(props) => props.theme.font.context};
  white-space: pre-line;
  font-weight: lighter;
`;

export const SkillAdopted = styled.p`
  font-family: ${(props) => props.theme.font.context};
  margin-top: 40px;
  font-size: 1.1rem;
  font-weight: lighter;
`;
export const SkillBox = styled(Fulldiv)`
  height: auto;

  margin: 40px 0;
`;
export const SkillList = styled.li`
  font-size: 1.4rem;
  list-style-type: square;
  list-style-position: inside;
`;
export const ProjectImage = styled.img`
  width: 70%;
  height: 400px;
  background-color: white;
  position: relative;
  left: 200px;
`;
