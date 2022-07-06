import React from "react";
import styled from "styled-components";

import { useUserContext } from "../context/UserContext";

export const Forgot = () => {
  const { forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const { emailValue } = e.target.elements;

    console.log(emailValue.value);

    try {
      const email = emailValue.value;
      forgotPassword(email);
    } catch (error) {
      alert("メールアドレスが間違っています");
    }
  };

  return (
    <>
      <PText>メールアドレスにパスワード初期設定メールを送信します</PText>
      <form onSubmit={onSubmit}>
        <Input
          required
          id="email"
          placeholder="メールアドレス"
          name="emailValue"
          autoComplete="email"
          autoFocus
        />
        <Button type="submit">送信</Button>
      </form>
    </>
  );
};

const PText = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  background: #f0eded;
  padding: 12px;
  border: none;
  border-radius: 10px;
  color: #333;
  font-size: 14px;

  &::placeholder {
    color: #999;
  }

  & + input,
  & + button {
    margin-top: 20px;
  }
`;

const Button = styled.button`
  background-color: #abedd8;
  width: 100%;
  border-radius: 20px;
  border: none;
  padding: 12px 50px;
  cursor: pointer;
  border-radius: 8px;
  color: #333;
  font-weight: bold;
  transition: 2s;

  &:hover {
    opacity: 0.5;
  }
`;
