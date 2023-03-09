import React from "react";
import { FixMeLater } from "../types/general";
import "./CustomIcon.css";

export default function CustomIcon(props?: FixMeLater) {
  const gitIconPath = "../img/github.png";
  const emailIconPath = "../img/apple-mail.png";
  if (props?.type === "git")
    return (
      <div className="custom-icon-container">
        <img
          src={gitIconPath}
          className="email-icon-container__icon"
          alt="email-icon"
        />
      </div>
    );
  return (
    <div className="custom-icon-container">
      <img
        src={emailIconPath}
        className="email-icon-container__icon"
        alt="email-icon"
      />
    </div>
  );
}
