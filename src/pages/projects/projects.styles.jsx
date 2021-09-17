import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 70%;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 1fr 1fr 1fr 1fr;
  gap: 150px 0;
  padding-bottom: 50px;
`;

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

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.blue}; ;
`;

export const Fulldiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: ${({ direction }) => (direction ? "right" : "left")};
`;
