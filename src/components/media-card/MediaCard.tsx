import "./MediaCard.css";
import React from "react";
import { FixMeLater } from "../../types/general";

export default function MediaCard({ link }: FixMeLater) {
  return (
    <iframe
      src={link ?? "https://www.youtube.com/embed/Zk1NfO_LCFU"}
      width={1000}
      height={500}
      loading="eager"
      title="A youtube video"
    ></iframe>
  );
}
