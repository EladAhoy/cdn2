import "./MediaCard.css";
import React, { useState } from "react";
import { FixMeLater } from "../../types/general";
var Spinner = require("react-spinkit");

export default function MediaCard({ link, component }: FixMeLater) {
  const [showPic, setShowPic] = useState(true);

  const hideSpinner = () => {
    setShowPic(false);
    console.log("loaded");
  };

  return (
    <>
      <div className="container rsvp-wrapper">
        {showPic ? (
          <Spinner
            className="loading text-center"
            name="three-bounce"
            color="white"
            fadeIn="none"
          />
        ) : null}
        {link && (
          <iframe
            src={link}
            width={1000}
            height={500}
            loading="eager"
            title="A youtube video"
            onLoad={hideSpinner}
          ></iframe>
        )}
      </div>
    </>
  );
}
