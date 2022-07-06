import React, { useState } from "react";
import styled from "styled-components";

import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <Section>
      <Container>
        {!index ? <SignIn /> : <SignUp />}
        <PText onClick={toggleIndex}>
          {!index ? "新規登録" : "アカウントを既にお持ちの方"}
        </PText>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  border: 2px solid #eee;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PText = styled.p`
  width: 100%;
  color: #2c78c2;
  text-align: left;
  font-size: 12px;
  cursor: pointer;
`;
