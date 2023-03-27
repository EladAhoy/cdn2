import "./MailAndLinkedInButtons.css";
import LinkedInIcon from "./LinkedInIcon";
import EmailIcon from "./EmailIcon";
import CustomIcon from "./CustomIcon";
import Backdrop from "./Backdrop";
import React from "react";
import { FixMeLater } from "../types/general";

const renderBackdropOrOpenExternalLink = ({
  type,
  externalLink,
}: FixMeLater) => {
  return externalLink ? (
    <a href={externalLink}>Open</a>
  ) : (
    <Backdrop customComponent={type} onlyButton={true}></Backdrop>
  );
};

export default function MailAndLinkedInButtons({
  style,
  gitRef,
  type,
  externalLink,
}: FixMeLater) {
  if (style === 0) return <section className="buttons-container"></section>;

  if (gitRef && type && type !== "profile") {
    return (
      <section className="buttons-container">
        <button className="email" onClick={goToGit}>
          <CustomIcon type="git" /> Git
        </button>
        {renderBackdropOrOpenExternalLink({ type, externalLink })}
      </section>
    );
  }

  function goToGit() {
    const { gitLink } = gitRef;
    let link: FixMeLater;
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
