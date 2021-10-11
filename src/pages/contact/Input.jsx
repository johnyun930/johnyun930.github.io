import React, { useState } from "react";
import { Input, Label } from "./contact.styles";
import { Fulldiv } from "../../components/utills.styles";
export const NamedInput = ({ type = "text", name, label }) => {
  const [input, setInput] = useState("");

  return (
    <Fulldiv>
      <Label>{label}</Label>
      <Input
        type={type}
        name={name}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </Fulldiv>
  );
};
