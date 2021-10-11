import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 70%;
  height: 100vh;
  margin: 70px auto 0;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.blue};
  font-weight: bold;
`;
export const InnerContainer = styled.div`
  width: 100%;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SubTitle = styled.h6`
  font-size: 1rem;
  padding-left: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.blue};
`;
export const ContactList = styled.div`
  margin-top: 100px;
  width: 100%;
`;
export const ContactColumn = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;
export const ContactTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.lightblue};
`;
export const ContactContext = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.blue};
`;
export const Formtitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.blue};
`;
export const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.lightblue};
`;
export const Input = styled.input`
  width: 250px;
  height: 50px;
  font-size: 18px;
  padding-left: 10px;
  box-shadow: 5px 5px 3px #536eb7;
  background-color: #dae3fa;
  color: #333030;
  font-weight: bold;
  transition: background-color 1s;
  &:focus {
    background-color: white;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 70%;
  margin-top: 100px;
`;
export const InputContainer = styled.div`
  width: 100%;
  height: 40%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`;
export const TextAreaContainer = styled.div`
  width: 100%;
  height: 40%;
  display: grid;
  grid-template-columns: 60% 30%;
`;
export const TextArea = styled.textarea`
  width: 350px;
  height: 200px;
  resize: none;
  padding: 10px;
  box-shadow: 5px 5px 3px #536eb7;
  background-color: #dae3fa;
  transition: background-color 1s;
  &:focus {
    background-color: white;
  }
`;

export const SubmitButton = styled.button`
  height: 100%;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.lightblue};
  font-weight: bold;

  &:hover {
    transform: scale(1.2);
  }
`;
