import React from "react";
import styled from "styled-components";
import { useUserContext } from "../context/UserContext";

// import { auth } from "../firebase";

export const SignUp = () => {
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    ///
    e.preventDefault();
    const { nameValue, emailValue, passwordValue, confirmPasswordValue } =
      e.target.elements;

    console.log(
      nameValue.value,
      emailValue.value,
      passwordValue.value,
      confirmPasswordValue.value
    );

    if (passwordValue.value !== confirmPasswordValue.value) {
      alert("パスワードが間違っています");
    } else {
      try {
        const name = nameValue.value;
        const email = emailValue.value;
        const password = passwordValue.value;

        if (email && name && password) registerUser(email, name, password);
        console.log("ログイン完了！！");
      } catch (error) {
        alert("メールアドレスまたはパスワードが間違っています");
      }
    }
  };

  return (
    <>
      <h2 className="title">新規登録</h2>

      <form onSubmit={onSubmit}>
        <Input
          required
          id="name"
          placeholder="ユーザーネーム"
          name="nameValue"
          autoFocus
          type="text"
        />
        <Input
          required
          id="email"
          placeholder="メールアドレス"
          name="emailValue"
          autoComplete="email"
        />
        <Input
          required
          name="passwordValue"
          placeholder="パスワード"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Input
          required
          name="confirmPasswordValue"
          placeholder="確認用"
          type="password"
          id="confirmPassword"
          autoComplete="current-confirmPassword"
        />
        <Button type="submit">登録</Button>
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
