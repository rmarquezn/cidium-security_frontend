import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import PostPage from "./components/PostPage";
import CommentsSection from "./components/CommentsSection";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
    <HomePage />
    <PostPage />
    <CommentsSection />
  </React.StrictMode>,
  document.getElementById("root")
);
