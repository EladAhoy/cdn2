import "./MediaCard.css";
import React, { useState } from "react";
import { FixMeLater } from "../../types/general";
var Spinner = require("react-spinkit");

export default function MediaCard({ link }: FixMeLater) {
  const [showPic, setShowPic] = useState(true);

  const hideSpinner = () => {
    setShowPic(false);
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
        <iframe
          src={link ?? "https://www.youtube.com/embed/Zk1NfO_LCFU"}
          width={1000}
          height={500}
          loading="eager"
          title="A youtube video"
          onLoad={hideSpinner}
        ></iframe>
      </div>
    </>
  );
}
