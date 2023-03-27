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
  onlyButton,
}: FixMeLater) {
  const { state, dispatch }: FixMeLater = useContext(MyContext);
  const handleClick = () =>
    dispatch({ type: "CLICK", payload: { customComponent } });
  const renderButton = () => {
    return noButton ? "" : <button onClick={handleClick}>Open</button>;
  };

  const renderClasses = () => {
    let response: FixMeLater;
    response = state.clicked ? "backdrop-container open" : "backdrop-container";
    return response;
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
        return (
          <MediaCard
            link="https://www.youtube.com/embed/Zk1NfO_LCFU"
            component="redwoodBlog"
          />
        );
      case "aicLookup":
        return <MediaCard link="https://www.youtube.com/embed/ZXMQVSZYw-k" />;
      case "displayContent":
        return <MediaCard link="https://www.youtube.com/embed/fG4sb2Q4fRQ" />;
      case "marketialForm":
        return <MediaCard link="https://www.youtube.com/embed/ufDdRHGMB1s" />;
      default:
        return "";
    }
  };

  const renderCloseButton = () => {
    return [
      "explainit",
      "1000ish",
      "wordpressDemoStore",
      "w3portfolio",
      "practice",
      "hebrewWords",
      "questionsCms",
    ].includes(state?.customComponent) ? (
      ""
    ) : (
      <button onClick={handleClick}>Close</button>
    );
  };

  return onlyButton ? (
    <section className="backdrop-container">{renderButton()}</section>
  ) : (
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
