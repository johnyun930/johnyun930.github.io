import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 90%;
  height: 20vh;
  border-top: 1px solid #c7c7c7;
  margin: 40px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
export const FooterColumn = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 30px;
`;

export const Title = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.blue};
`;
export const Context = styled.p`
  font-size: 0.9rem;
`;
