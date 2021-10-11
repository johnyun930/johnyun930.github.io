import styled, { keyframes } from "styled-components";

const moveInLeft = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-100px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
  background-color: #face70;
    }
    
`;

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
  position: relative;
`;
export const Greeting = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.colors.blue};
  font-size: 5rem;
  font-family: ${(props) => props.theme.font.title};
  font-weight: 600;
  text-shadow: 6px 2px 2px white;
  overflow: hidden;
  animation: ${moveInLeft} 2s;
  animation-fill-mode: forwards;
  backface-visibility: hidden;
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
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.2);
  color: white;
  font-size: 0.9rem;
  border-radius: 20px;

  &:hover {
    transform: scale(1.1);
  }
`;
