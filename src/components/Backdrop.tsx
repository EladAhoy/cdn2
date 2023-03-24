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
      case "w3portfolio":
        link = "https://elad.explainit.online/";
        window.location.href = link;
        break;
      case "practice":
        link = "https://www.explainit.online/s/practice/s1/content/s10.php";
        window.location.href = link;
        break;
      case "hebrewWords":
        link =
          "https://www.explainit.online/s/practiceit.xyz/s1/psychometric/questions_10/index.php";
        window.location.href = link;
        break;
      case "questionsCms":
        link =
          "https://www.explainit.online/s/practicemath/s1/math/questions_031/index.php";
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
      case "explainit":
      case "1000ish":
      case "wordpressDemoStore":
      case "w3portfolio":
      case "practice":
      case "hebrewWords":
      case "questionsCms":
        return goToSite(state?.customComponent);
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
