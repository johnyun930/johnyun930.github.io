import React from "react";
import {
  ContactContainer,
  Title,
  InnerContainer,
  Fulldiv,
  SubTitle,
  ContactList,
  ContactColumn,
  ContactTitle,
  ContactContext,
  Formtitle,
  Form,
  TextAreaContainer,
  TextArea,
  SubmitButton,
  InputContainer,
  Label,
  Input,
} from "./contact.styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const info = [
  { title: "Phone", context: "236-869-1001" },
  { title: "Email", context: "johnyun930@gmail.com" },
  {
    title: "Follow Me",
    context: (
      <>
        <a href="https://github.com/johnyun930">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/jonghunyun">
          {" "}
          <LinkedInIcon fontSize="large" />
        </a>
      </>
    ),
  },
];

export default function Contact() {
  return (
    <ContactContainer>
      <Title>Questions?</Title>
      <InnerContainer>
        <Fulldiv>
          <SubTitle>Looking forward to hearing from you!</SubTitle>
          <ContactList>
            {info.map((data) => {
              return (
                <>
                  <ContactColumn>
                    <ContactTitle>{data.title}</ContactTitle>
                    <ContactContext>{data.context}</ContactContext>
                  </ContactColumn>
                </>
              );
            })}
          </ContactList>
        </Fulldiv>
        <Fulldiv>
          <Formtitle>Simply leave a message</Formtitle>
          <Form>
            <InputContainer>
              <Fulldiv>
                <Label>First Name</Label>
                <Input type="text"></Input>
              </Fulldiv>
              <Fulldiv>
                <Label>Last Name</Label>
                <Input type="text"></Input>
              </Fulldiv>
              <Fulldiv>
                <Label>Email</Label>
                <Input type="text"></Input>
              </Fulldiv>
              <Fulldiv>
                <Label>Phone</Label>
                <Input type="text"></Input>
              </Fulldiv>
            </InputContainer>
            <TextAreaContainer>
              <Fulldiv>
                <Label>Message</Label>
                <TextArea></TextArea>
              </Fulldiv>
              <Fulldiv>
                <SubmitButton>Submit</SubmitButton>
              </Fulldiv>
            </TextAreaContainer>
          </Form>
        </Fulldiv>
      </InnerContainer>
    </ContactContainer>
  );
}
