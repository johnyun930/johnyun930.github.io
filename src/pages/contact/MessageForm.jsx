import React from "react";
import {
  Form,
  TextAreaContainer,
  TextArea,
  SubmitButton,
  InputContainer,
  Label,
} from "./contact.styles";
import { NamedInput } from "./Input";
import { Fulldiv } from "../../components/utills.styles";

export const MessageForm = () => (
  <Form>
    <InputContainer>
      <NamedInput label="First Name" type="text" name="firstname"></NamedInput>
      <NamedInput label="Last Name" type="text" name="lastname"></NamedInput>
      <NamedInput label="Email" type="email" name="email"></NamedInput>
      <NamedInput label="Phone" type="text" name="phone"></NamedInput>
    </InputContainer>
    <TextAreaContainer>
      <Fulldiv>
        <Label>Message</Label>
        <TextArea></TextArea>
      </Fulldiv>
      <Fulldiv>
        <SubmitButton onSubmit={() => {}}>Submit</SubmitButton>
      </Fulldiv>
    </TextAreaContainer>
  </Form>
);
