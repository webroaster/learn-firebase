import React, { useState } from "react";
import styled from "styled-components";

import { Forgot } from "./Forgot";
import { Login } from "./Login";

export const SignIn = () => {
  const [forgot, setForgot] = useState(false);

  return (
    <>
      {forgot ? <Forgot /> : <Login />}
      <PText onClick={() => setForgot((prevState) => !prevState)}>
        {forgot ? "ログインページに戻る" : "パスワードを忘れた場合"}
      </PText>
    </>
  );
};

const PText = styled.p`
  width: 100%;
  color: #2c78c2;
  text-align: left;
  font-size: 12px;
  cursor: pointer;
  margin-top: 20px;
`;
