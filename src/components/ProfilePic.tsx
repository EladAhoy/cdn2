import "./ProfilePic.css";
import { FixMeLater } from "../types/general";
import React from "react";
//@ts-ignore
import profile_pic_path from "../assets/profile_pic.jpg";

export default function ProfilePic(props?: FixMeLater) {
  const handleMouseEnter = (event: FixMeLater) => {
    if (typeCondition) return;
    const containerDiv = event.currentTarget;
    const imgTagSrc = containerDiv?.children[0]?.src;
    if (!!imgTagSrc) containerDiv.children[0].src = props.gifSrc;
  };
  const handleMouseLeave = (event: FixMeLater) => {
    if (typeCondition) return;
    const containerDiv = event.currentTarget;
    const imgTagSrc = containerDiv?.children[0]?.src;
    if (!!imgTagSrc) containerDiv.children[0].src = props.src;
  };

  const getClasses = () => {
    if (typeCondition) return "profile-pic-container__profile-pic profile";
    if (scaleCondition) return "profile-pic-container__profile-pic scale-img";
    else return "profile-pic-container__profile-pic";
  };

  const { type } = props;
  const typeCondition = type && ["profile"].includes(type);
  const scaleCondition = props.scaleImg;
  const defaultSrc = typeCondition
    ? profile_pic_path
    : "https://media3.giphy.com/media/tqj4m9BRURayxQAIW9/200w_d.gif?cid=ed15dd37rlh47fd8wlu3yw19bawhf8ttcoqwb069p8adkvkb&rid=200w_d.gif&ct=g";
  const defaultImg = (
    <img src={defaultSrc} className={getClasses()} alt="logo" />
  );
  return (
    <div
      className="profile-pic-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.src && !typeCondition ? (
        <img src={props.src} className={getClasses()} alt="logo" />
      ) : (
        defaultImg
      )}
    </div>
  );
}
