import { useContext } from 'react';
import './Backdrop.css';
import CheckoutPage from './CheckoutPage';
import MyContext from './context';
import FunFacts from './FunFacts';
import DropDownNavbar from './DropDown';
import { optionsComplex } from './Options';
import SendTokens from './SendTokens';


export default function Backdrop({ children, customComponent }) {

  const { state, dispatch } = useContext(MyContext);
  const handleClick = () => dispatch({ type: "CLICK", payload: { customComponent } });

  return (
    <>
      <section className="backdrop-container">
        <button onClick={handleClick}>BackDrop</button>
        {state.clicked && (<div className="backdrop">
          <button onClick={handleClick}>BackDrop</button>
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


