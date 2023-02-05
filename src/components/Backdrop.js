import { useContext } from 'react';
import './Backdrop.css';
import CheckoutPage from './CheckoutPage';
import MyContext from './context';
import FunFacts from './FunFacts';
import DropDownNavbar from './DropDown';
import { optionsComplex } from './Options';
import SendTokens from './SendTokens';


export default function Backdrop({ children, customComponent, noButton }) {

  const { state, dispatch } = useContext(MyContext);
  const handleClick = () => dispatch({ type: "CLICK", payload: { customComponent } });
  const renderButton = () => {
    return noButton ? '' : <button onClick={handleClick}>Open</button>;
  }

  const renderClasses = () => {
    let response;
    response = state.clicked ? 'backdrop-container open' : 'backdrop-container';
    return response;
  }

  return (
    <>
      <section className={renderClasses()}>
        {renderButton()}
        {state.clicked && (<div className="backdrop">
          <button onClick={handleClick}>Close</button>
          {children}
          {customComponent === 'funFacts' ? <FunFacts /> : ''}
          {customComponent === 'mockCheckout' ? <CheckoutPage /> : ''}
          {customComponent === 'dropDownNavbar' ? <DropDownNavbar options={optionsComplex} /> : ''}
          {customComponent === 'sendTokens' ? <SendTokens /> : ''}
          <div className="textWrap"></div>
        </div>)}
      </section>
    </>);
}


