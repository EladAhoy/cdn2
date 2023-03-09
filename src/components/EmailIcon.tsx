import React from "react";
import "./EmailIcon.css";

export default function EmailIcon() {
  const emailIconPath = "../img/apple-mail.png";
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
