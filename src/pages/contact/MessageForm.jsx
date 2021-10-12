import React from "react";
import {
  Form,
  TextAreaContainer,
  SubmitButton,
  InputContainer,
} from "./contact.styles";
import { NamedInput } from "./Input";
import { Fulldiv } from "../../components/utills.styles";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export const MessageForm = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const history = useHistory();
  return (
    <Form>
      <InputContainer>
        <NamedInput
          ref={firstNameRef}
          label="First Name"
          type="text"
          name="firstname"
        ></NamedInput>
        <NamedInput
          ref={lastNameRef}
          label="Last Name"
          type="text"
          name="lastname"
        ></NamedInput>
        <NamedInput
          ref={emailRef}
          label="Email"
          type="email"
          name="email"
        ></NamedInput>
        <NamedInput
          ref={phoneRef}
          label="Phone"
          type="text"
          name="phone"
        ></NamedInput>
      </InputContainer>
      <TextAreaContainer>
        <NamedInput
          ref={messageRef}
          message
          name="message"
          label="Message"
        ></NamedInput>
        <Fulldiv>
          <SubmitButton
            type="button"
            onClick={() => {
              const data = {
                firstname: firstNameRef.current.value,
                lastname: lastNameRef.current.value,
                email: emailRef.current.value,
                phone: phoneRef.current.value,
                message: messageRef.current.value,
              };

              axios.post("http://localhost:5000/message", data).then((data) => {
                console.log(data);
                history.replace("/thankyou", {
                  name: firstNameRef.current.value,
                });
              });
            }}
          >
            Submit
          </SubmitButton>
        </Fulldiv>
      </TextAreaContainer>
    </Form>
  );
};
