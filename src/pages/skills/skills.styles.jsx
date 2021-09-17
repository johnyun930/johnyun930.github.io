import styled from "styled-components";
export const SkillContainer = styled.div`
  width: 100%;
  height: 70vh;
  margin-top: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.blue};
`;
export const MainContainer = styled.div`
  width: 80%;
  height: 70%;
  display: grid;
  margin: 100px auto 0;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
export const ItemBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 10% 80%;
`;
export const Fulldiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-top: 5px;
`;
export const SkillTitle = styled.h2`
  font-family: ${(props) => props.theme.font.title};
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
export const SkillContext = styled.p`
  font-size: 1rem;
`;
