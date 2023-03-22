import "./MediaCard.css";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import { FixMeLater } from "../../types/general";

export default function MediaCard({ link }: FixMeLater) {
  return (
    <CardMedia
      component="iframe"
      src={link ?? "https://www.youtube.com/embed/Zk1NfO_LCFU"}
    ></CardMedia>
  );
}
