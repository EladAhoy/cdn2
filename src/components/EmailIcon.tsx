import React from "react";
import "./EmailIcon.css";
//@ts-ignore
import emailIconPath from "../img/apple-mail.png";

export default function EmailIcon() {
  return (
    <div className="email-icon-container">
      <img
        src={emailIconPath}
        className="email-icon-container__icon"
        alt="email-icon"
      />
    </div>
  );
}
