import React from "react";
import { useEffect } from "react";
import { FixMeLater } from "../types/general";
import "./ToastWithBackdrop.css";
//@ts-ignore
import swipe_right_gif from "../assets/swipe-right.gif";

export default function ToastWithBackdrop(props: FixMeLater) {
  useEffect(() => {
    const textDiv = document.querySelector(".toast");
    if (props.show) textDiv?.classList.add("show");
    else textDiv?.classList.remove("show");
  }, [props.show]);
  const isMobile = window.innerWidth < 768;
  return isMobile ? (
    <article id="backdrop show">
      <div className="toast">
        <div className="textWrap">
          <img src={swipe_right_gif} alt="logo" />
        </div>
      </div>
    </article>
  ) : (
    <article id="backdrop show">
      <div className="toast">
        <div className="textWrap">
          <h1>Welcome!</h1>
          <ul className="backdrop__ul">
            <li>Each card describes a project.</li>
            <li>Project pics are randomly fetched from Giphy.com.</li>
            <li>Feel free to hover over them.</li>
            <li>Click "Open" for a demo.</li>
            <li>Click "Git" for the source code.</li>
            <br />
            Enjoy :)
          </ul>
        </div>
      </div>
    </article>
  );
}
