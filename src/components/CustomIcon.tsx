import React from "react";
import { FixMeLater } from "../types/general";
import "./CustomIcon.css";
//@ts-ignore
import gitIconPath from "../img/github.png";
//@ts-ignore
import emailIconPath from "../img/apple-mail.png";

export default function CustomIcon(props?: FixMeLater) {
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
