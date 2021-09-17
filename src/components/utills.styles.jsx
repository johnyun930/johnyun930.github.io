import styled from "styled-components";

export const Fulldiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: ${({ direction }) => (direction ? "right" : "left")};
`;
