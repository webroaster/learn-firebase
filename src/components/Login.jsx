import React from "react";
import styled from "styled-components";

import { useUserContext } from "../context/UserContext";

export const Login = () => {
  const { signInUser } = useUserContext();

  // ログインボタンクリック時
  const onSubmit = (e) => {
    ///
    e.preventDefault();
    const { emailValue, passwordValue } = e.target.elements;

    console.log(emailValue.value, passwordValue.value);

    try {
      const email = emailValue.value;
      const password = passwordValue.value;
      if (email && password) signInUser(email, password);
    } catch (error) {
      alert("メールアドレスまたはパスワードが間違っています");
    }
  };

  return (
    <>
      <h2 className="title">Login</h2>
      <form onSubmit={onSubmit}>
        <Input
          required
          id="email"
          placeholder="メールアドレス"
          name="emailValue"
          autoComplete="email"
          autoFocus
        />
        <Input
          required
          name="passwordValue"
          placeholder="パスワード"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button type="submit">ログイン</Button>
      </form>
    </>
  );
};

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
