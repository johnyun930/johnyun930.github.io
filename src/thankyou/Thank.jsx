import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { MainContainer, ThankyouNote, RedirectMessage } from "./thank.styles";

export const Thank = () => {
  const [time, setTime] = useState(5);
  const location = useLocation();
  const name = location.state.name;
  const history = useHistory();
  console.log(name);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  useEffect(() => {
    if (time <= 0) {
      history.replace("/");
    }
  }, [time, history]);

  return (
    <MainContainer>
      <ThankyouNote>Thank you, {name}. Please Check your email</ThankyouNote>

      <RedirectMessage>
        This Page will be redirected to main page after {time} seconds
      </RedirectMessage>
    </MainContainer>
  );
};
