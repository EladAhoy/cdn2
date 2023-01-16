import { useContext } from 'react';
import './Backdrop.css';
import CheckoutPage from './CheckoutPage';
import MyContext from './context';
import FunFacts from './FunFacts';

export default function Backdrop({ children, customComponent }) {

  const { state, dispatch } = useContext(MyContext);
  const handleClick = () => dispatch({ type: "CLICK" });

  return (
    <>
      <section className="backdrop-container">
        <button onClick={handleClick}>Toggle BackDrop</button>
        {state.clicked && (<div className="backdrop">
          <button onClick={handleClick}>Toggle BackDrop</button>
          {children}
          {customComponent === 'FunFacts' ? <FunFacts /> : ''}
          {customComponent === 'MockCheckout' ? <CheckoutPage /> : ''}
          <div className="textWrap">
            <h1>BackDrop!</h1>
          </div>
        </div>)}
      </section>
    </>);
}


