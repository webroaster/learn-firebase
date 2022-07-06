import React from "react";
import styled from "styled-components";

import { useUserContext } from "../context/UserContext";

export const Dashboard = () => {
  const { logoutUser } = useUserContext();

  return (
    <>
      <Title>Dashboard</Title>
      <Button onClick={logoutUser}>ログアウト</Button>
    </>
  );
};

const Title = styled.h2`
  display: grid;
  place-items: center;
`;
const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 30px auto;
  cursor: pointer;
  background-color: #abedd8;
  padding: 12px 30px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  border: none;
  transition: 0.2s;

  &:hover {
    opacity: 0.5;
  }
`;
