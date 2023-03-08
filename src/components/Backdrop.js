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

export default function Backdrop({ children, customComponent, noButton }) {
  const { state, dispatch } = useContext(MyContext);
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

  // const goToSite = (customComponent) => {
  //   let link;
  //   switch (customComponent) {
  //     case 'redwoodBlog':
  //       link = 'https://redwoodjs-blog-shesdev.netlify.app/';
  //       window.location.href = link;
  //       break;
  //     default:
  //       return;
  //   }
  // };

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
        // return goToSite(customComponent);
        return <MediaCard />;
      default:
        return "";
    }
  };

  const renderCloseButton = () => {
    // return state?.customComponent === 'redwoodBlog' ? '' : <button onClick={handleClick}>Close</button>;
    return <button onClick={handleClick}>Close</button>;
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
