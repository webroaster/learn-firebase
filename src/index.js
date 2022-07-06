import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContextPrivate } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 以下の子要素の中でコンテキストの値を渡せる */}
    <UserContextPrivate>
      <App />
    </UserContextPrivate>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
