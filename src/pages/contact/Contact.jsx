import React from "react";
import {
  ContactContainer,
  Title,
  InnerContainer,
  SubTitle,
  ContactList,
  Formtitle,
} from "./contact.styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Fulldiv } from "../../components/utills.styles";
import { ContactInfo } from "./ContactInfo";
import { MessageForm } from "./MessageForm";

const info = [
  { title: "Phone", context: "236-869-1001" },
  { title: "Email", context: "johnyunwork@gmail.com" },
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
              return <ContactInfo {...data} />;
            })}
          </ContactList>
        </Fulldiv>
        <Fulldiv>
          <Formtitle>Simply leave a message</Formtitle>
          <MessageForm />
        </Fulldiv>
      </InnerContainer>
    </ContactContainer>
  );
}
