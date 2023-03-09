import React from "react";
import "./LinkedInIcon.css";

export default function LinkedInIcon() {
  const linkedInIconPath = "../img/linkedin.png";
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
