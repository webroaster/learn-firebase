import React from "react";
import styled from "styled-components";

import "./App.css";

import { Auth } from "./components/Auth";
import { Dashboard } from "./components/Dashboard";
import { useUserContext } from "./context/UserContext";

function App() {
  const { loading, error, user } = useUserContext();
  return (
    <>
      {/* エラーの時エラーメッセージ表示 */}
      {Error && <ErrorMessage>{error.message}</ErrorMessage>}

      {/* ローディング中？ || ログイン中？ */}
      {loading ? (
        <LoadingMessage>Loading...</LoadingMessage>
      ) : (
        <>{user ? <Dashboard /> : <Auth />}</>
      )}
    </>
  );
}

export default App;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  display: grid;
  place-items: center;
`;
const LoadingMessage = styled.p`
  font-weight: bold;
  color: #333;
  font-size: 16px;
  display: grid;
  place-items: center;
`;
