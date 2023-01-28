import { useContext } from 'react';
import './Backdrop.css';
import CheckoutPage from './CheckoutPage';
import MyContext from './context';
import FunFacts from './FunFacts';
import Navbar from './Navbar';

export default function Backdrop({ children, customComponent }) {

  const { state, dispatch } = useContext(MyContext);
  const handleClick = () => dispatch({ type: "CLICK", payload: { customComponent } });

  return (
    <>
      <section className="backdrop-container">
        <button onClick={handleClick}>Toggle BackDrop</button>
        {state.clicked && (<div className="backdrop">
          <button onClick={handleClick}>Toggle BackDrop</button>
          {children}
          {customComponent === 'funFacts' ? <FunFacts /> : ''}
          {customComponent === 'mockCheckout' ? <CheckoutPage /> : ''}
          {customComponent === 'navbar' ? <Navbar /> : ''}
          <div className="textWrap">
            {/* <h1>BackDrop!</h1> */}
          </div>
        </div>)}
      </section>
    </>);
}


