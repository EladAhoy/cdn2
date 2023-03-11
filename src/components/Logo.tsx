import React from "react";
import "./Logo.css";
//@ts-ignore
import shesdevPath from "../img/SHESDEV.png";

export default function Logo() {
  return (
    <div className="logo-container">
      <img src={shesdevPath} className="logo-container__App-logo" alt="logo" />
    </div>
  );
}
