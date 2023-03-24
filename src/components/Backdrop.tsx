import { useContext } from "react";
import "./Backdrop.css";
import CheckoutPage from "./CheckoutPage";
import MyContext from "./context";
import FunFacts from "./FunFacts";
import DropDownNavbar from "./DropDown";
import { optionsComplex } from "./Options";
import SendTokens from "./SendTokens";
import { Container } from "./counter/container";
import MediaCard from "./media-card/MediaCard";
import React from "react";
import { FixMeLater } from "../types/general";

export default function Backdrop({
  children,
  customComponent,
  noButton,
}: FixMeLater) {
  const { state, dispatch }: FixMeLater = useContext(MyContext);
  const handleClick = () =>
    dispatch({ type: "CLICK", payload: { customComponent } });
  const renderButton = () => {
    return noButton ? "" : <button onClick={handleClick}>Open</button>;
  };

  const renderClasses = () => {
    let response;
    response = state.clicked ? "backdrop-container open" : "backdrop-container";
    return response;
  };

  const goToSite = (customComponent: FixMeLater) => {
    let link: string;
    switch (customComponent) {
      case "explainit":
        link = "https://www.explainit.online/";
        window.location.href = link;
        break;
      case "1000ish":
        link = "https://1000ish.explainit.online/";
        window.location.href = link;
        break;
      case "wordpressDemoStore":
        link = "https://fiveminutes.explainit.online/";
        window.location.href = link;
        break;
      default:
        return;
    }
  };

  const getComponent = () => {
    switch (state?.customComponent) {
      case "funFacts":
        return <FunFacts />;
      case "mockCheckout":
        return <CheckoutPage />;
      case "dropDownNavbar":
        return <DropDownNavbar options={optionsComplex} />;
      case "sendTokens":
        return <SendTokens />;
      case "counter":
        return <Container />;
      case "redwoodBlog":
        return <MediaCard />;
      case "aicLookup":
        return <MediaCard link="https://www.youtube.com/embed/ZXMQVSZYw-k" />;
      case "displayContent":
        return <MediaCard link="https://www.youtube.com/embed/fG4sb2Q4fRQ" />;
      case "marketialForm":
        return <MediaCard link="https://www.youtube.com/embed/ufDdRHGMB1s" />;
      case "explainit":
      case "1000ish":
      case "wordpressDemoStore":
        return goToSite(state?.customComponent);
      default:
        return "";
    }
  };

  const renderCloseButton = () => {
    return ["explainit", "1000ish", "wordpressDemoStore"].includes(
      state?.customComponent
    ) ? (
      ""
    ) : (
      <button onClick={handleClick}>Close</button>
    );
  };

  return (
    <>
      <section className={renderClasses()}>
        {renderButton()}
        {state.clicked && (
          <div className="backdrop">
            {renderCloseButton()}
            {children}
            {getComponent()}
            <div className="textWrap"></div>
          </div>
        )}
      </section>
    </>
  );
}
