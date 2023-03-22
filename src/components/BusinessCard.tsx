import "./BusinessCard.css";
import ProfilePic from "./ProfilePic";
import MailAndLinkedInButtons from "./MailAndLinkedInButtons";
import "animate.css";
import React from "react";
import { FixMeLater } from "../types/general";

function validateImageHeight({ imgHeight, imgWidth }: FixMeLater) {
  return +imgHeight / +imgWidth < 1;
}

function Card(props?: FixMeLater) {
  const { item } = props;

  const isMobile = window.innerWidth < 768;

  return (
    <article className={item?.classNameList}>
      <section className="profile_pic">
        <div className="business-card__profile-pic-container">
          <ProfilePic
            src={item?.picSrc}
            gifSrc={item?.picSrcGif}
            type={item?.type}
            scaleImg={item?.scaleImage}
          />
        </div>
      </section>

      <section className="buttons-and-details">
        <h1 className="name">{item?.name}</h1>
        <h4 className="role">{item?.role}</h4>
        <MailAndLinkedInButtons
          style={{ opacity: 1 }}
          gitRef={{ gitName: item?.gitName, gitLink: item?.gitLink }}
          type={item?.type}
        />
      </section>

      <section className="about">
        <h3 className="about__header">{item?.aboutHeader}</h3>
        {isMobile ? (
          <p className="about__text">{item?.aboutText}</p>
        ) : (
          <p className="about__text">{item?.aboutText}</p>
        )}
      </section>
    </article>
  );
}

export default function BusinessCard(props?: FixMeLater) {
  const { item, gifData } = props;
  const {
    images: {
      fixed_width_still: { url: urlStill },
    },
    images: {
      fixed_width_downsampled: { url: urlGif },
    },
  } = gifData;
  const {
    images: {
      fixed_width_still: { height: imgHeight },
    },
    images: {
      fixed_width_still: { width: imgWidth },
    },
  } = gifData;
  if (urlStill) {
    item.picSrc = urlStill;
    item.picSrcGif = urlGif;
    item.scaleImage = validateImageHeight({ imgHeight, imgWidth });
  }
  return <Card item={item} />;
}
