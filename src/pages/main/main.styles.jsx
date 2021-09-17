import styled from "styled-components";
export const MainContainer = styled.div`
  width: 55%;
  height: 80vh;
  display: grid;
  gap: 30px;
  padding-top: 50px;
  margin: 20px auto 0;
  grid-template-columns: 1.3fr 1fr;
`;
export const ProfileImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
`;
export const Introduction = styled.div`
  width: 100%;
  height: 100%;
`;
export const Greeting = styled.h1`
  display: inline;
  color: ${(props) => props.theme.colors.blue};
  font-size: 5rem;
  font-family: ${(props) => props.theme.font.title};
  font-weight: 600;
  background-color: #face70;
  text-shadow: 6px 2px 2px white;
`;

export const JobTitle = styled.h3`
  font-family: ${(props) => props.theme.font.title};

  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin-top: 40px;
  color: ${(props) => props.theme.colors.blue}; ;
`;
export const ShortIntroduction = styled.p`
  margin-top: 40px;
`;
export const IntroHeading = styled.h6`
  font-family: ${(props) => props.theme.font.title};

  color: ${(props) => props.theme.colors.blue};
  font-size: 1.2rem;
  font-weight: 600;
`;
export const Context = styled.p`
  font-family: ${(props) => props.theme.font.context};
  font-size: 1rem;
  color: #000000;
`;
export const DirectionButton = styled.button`
  width: 120px;
  margin-right: 20px;
  margin-top: 20px;
  height: 50px;
  font-size: 1rem;
  background-color: ${(props) => props.color || props.theme.buttonColors.green};
  box-shadow: 3px 5px ${(props) => props.theme.colors.lightblue};
  color: white;
  font-size: 0.9rem;
  border-radius: 20px;
`;
