import React, { useState } from "react";
import { Input, Label, TextArea } from "./contact.styles";
import { Fulldiv } from "../../components/utills.styles";
import { forwardRef } from "react";
export const NamedInput = forwardRef(
  ({ message = false, type = "text", name, label }, ref) => {
    const [input, setInput] = useState("");

    if (message) {
      return (
        <Fulldiv>
          <Label>{label}</Label>
          <TextArea
            ref={ref}
            name={name}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </Fulldiv>
      );
    } else {
      return (
        <Fulldiv>
          <Label>{label}</Label>
          <Input
            ref={ref}
            type={type}
            name={name}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </Fulldiv>
      );
    }
  }
);
