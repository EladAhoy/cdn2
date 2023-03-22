import "./MailAndLinkedInButtons.css";
import LinkedInIcon from "./LinkedInIcon";
import EmailIcon from "./EmailIcon";
import CustomIcon from "./CustomIcon";
import Backdrop from "./Backdrop";
import React from "react";
import { FixMeLater } from "../types/general";

export default function MailAndLinkedInButtons(props?: FixMeLater) {
  if (props?.style?.opacity === 0)
    return <section className="buttons-container"></section>;

  if (props?.gitRef && props?.type && props?.type !== "profile") {
    const { type } = props;

    return (
      <section className="buttons-container">
        <button className="email" onClick={goToGit}>
          <CustomIcon type="git" /> Git
        </button>
        <Backdrop customComponent={type}></Backdrop>
      </section>
    );
  }

  function goToGit() {
    const { gitRef } = props;
    const { gitLink } = gitRef;
    let link;
    const srcLink = "https://github.com/ShesdevSoftwareDevelopment/cdn2";
    link = gitLink ?? srcLink;    
    window.location.href = link;
  }
  const goToLinkedin = () => {
    const link = "https://www.linkedin.com/in/eladsheskin/";
    window.location.href = link;
  };
  const sendMail = () => {
    const link = "mailto:fiveminutes001@gmail.com";
    window.location.href = link;
  };

  return (
    <section className="buttons-container">
      <button className="email" onClick={sendMail}>
        <EmailIcon />
        Email
      </button>
      <button className="linked-in" onClick={goToLinkedin}>
        <LinkedInIcon />
        LinkedIn
      </button>
    </section>
  );
}
