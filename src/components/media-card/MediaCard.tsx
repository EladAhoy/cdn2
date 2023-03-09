import "./MediaCard.css";
import CardMedia from "@mui/material/CardMedia";
import React from "react";

export default function MediaCard() {
  return (
    <CardMedia
      component="iframe"
      src="https://www.youtube.com/embed/Zk1NfO_LCFU"
    ></CardMedia>
  );
}
