import React from "react";
import "./LinkedInIcon.css";
//@ts-ignore
import linkedInIconPath from "../img/linkedin.png";

export default function LinkedInIcon() {
  return (
    <div className="linkedin-icon-container">
      <img
        src={linkedInIconPath}
        className="linkedin-icon-container__icon"
        alt="linkedin-icon"
      />
    </div>
  );
}
