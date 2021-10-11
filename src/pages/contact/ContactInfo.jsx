import React from "react";
import { ContactColumn, ContactTitle, ContactContext } from "./contact.styles";

export const ContactInfo = ({ title, context }) => (
  <ContactColumn>
    <ContactTitle>{title}</ContactTitle>
    <ContactContext>{context}</ContactContext>
  </ContactColumn>
);
