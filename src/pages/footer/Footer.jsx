import React from "react";
import { FooterContainer, FooterColumn, Title, Context } from "./footer.styles";
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

export default function Footer() {
  return (
    <FooterContainer>
      {info.map((footer) => {
        return (
          <FooterColumn>
            <Title>{footer.title}</Title>
            <Context>{footer.context}</Context>
          </FooterColumn>
        );
      })}
      <FooterColumn>
        <p>© 2021 By John Yun. All Rights Reserved.</p>
      </FooterColumn>
    </FooterContainer>
  );
}
