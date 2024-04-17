import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // 브라우저의 현재 주소를 저장하고 감시하는 BrowserRouter
  // 리액트 개발자 도구에서 State를 통해 다양한 정보를 보관하고 있다.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
