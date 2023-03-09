import React from "react";
import "./Logo.css";

export default function Logo() {
  const shesdevPath = "%PUBLIC_URL%/SHESDEV.png";
  return (
    <div className="logo-container">
      <img src={shesdevPath} className="logo-container__App-logo" alt="logo" />
    </div>
  );
}
