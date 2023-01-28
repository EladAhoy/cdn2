import { useEffect, useState, useReducer } from 'react';
import './Content.css';
// import FunFacts from './FunFacts';
import BusinessCard from './BusinessCard';
import ToastWithBackdrop from './ToastWithBackdrop';
// import CheckoutPage from './CheckoutPage';
// import Navbar from './DropDown';
import SendTokens from './SendTokens';
import { optionsComplex } from './Options';
import Backdrop from './Backdrop';
import { initialState, reducer } from './reducer';
import MyContext from './context';

function renderCards({ types, value }) {
  if (!types) return;
  const cards = types?.map((type, index) => <BusinessCard key={index} type={type} />);
  return (cards);
}


export default function Content() {

  const [showToast, setshowToast] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setshowToast(false), 5800);
    return () => clearTimeout(timer);
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <main className="content">
      <ToastWithBackdrop show={showToast} />
      <MyContext.Provider value={{ state, dispatch }}>
        <Backdrop customComponent={state?.customComponent || 'funFacts'}>
        </Backdrop>
        {/* <section className='fun-facts'>
        <FunFacts />
      </section> */}
        <section className='send-tokens'>
          <SendTokens options={optionsComplex} />
        </section> 
        {/* <section className='DropDown'>
        <Navbar options={optionsComplex} />
      </section>
      <section className='shows'>
        <CheckoutPage />
      </section>  */}
      <section className='cards'>
        {renderCards({ types: ['profile', 'mockCheckout', 'navbar'] })}            
        </section> 
      </MyContext.Provider>  
    </main>);
}


