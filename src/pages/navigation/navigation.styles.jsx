import styled from "styled-components";
export const NavigationContainer = styled.div`
  width: 90%;
  height: 10vh;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  display: flex;
`;
export const NavigationBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 25px;
  justify-content: ${(props) => (props.direction ? "flex-start" : "flex-end")};
`;
export const MainIcon = styled.img`
  margin-top: 10px;
  width: 30px;
  height: 30px;
`;
export const LogoName = styled.h1`
  font-family: ${(props) => props.theme.font.title};
  color: #566fb8;
  font-size: 2rem;
  font-weight: 600;
`;
export const JobTitle = styled.h3`
  font-family: ${(props) => props.theme.font.context};
  color: #7a7da3;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 2.7;
`;
export const NavButton = styled.div`
  font-family: ${(props) => props.theme.font.title};
  min-width: 70px;
  text-align: center;
  font-size: 1.5rem;
  line-height: ${(props) => (props.current ? "1.6" : "2")};
  font-weight: lighter;
  border-top: ${(props) => (props.current ? "4px solid #566FB8" : "")};
  &:hover {
    line-height: 1.6;
    border-top: 4px solid #a7d8d9;
    color: #a7d8d9;
  }
`;
