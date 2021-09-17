import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 70%;
  height: auto;
  margin: 60px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const AboutColumn = styled.div`
  width: 90%;
  height: 100%;
  margin: 100px auto 0;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.font.title};
  color: ${(props) => props.theme.colors.blue};
  font-size: 3rem;
  font-weight: 600;
`;
export const Context = styled.p`
  font-family: ${(props) => props.theme.font.context};
  margin-top: 100px;
  font-size: 1.2rem;
  line-height: 1.9;
  white-space: pre-wrap;
`;

export const ResumeButton = styled.a`
  display: inline-block;
  width: 250px;
  height: 60px;
  background-color: ${(props) => props.theme.buttonColors.green};
  border-radius: 20px;
  box-shadow: 3px 5px ${(props) => props.theme.colors.lightblue};
  text-align: center;
  line-height: 2.5;
  color: ${(props) => props.theme.colors.white};
  font-size: 1.4rem;
  &:hover {
    background-color: ${(props) => props.theme.buttonColors.purple};
  }
`;
export const ButtonBox = styled.div`
  width: 100%;
  text-align: right;
`;
export const ImageBox = styled.div`
  width: 80%;
  margin-top: 100px;
  margin-left: 120px;
  height: 40vh;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
