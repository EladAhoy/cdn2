import { useEffect, useState, useReducer } from 'react';
import './Content.css';
import BusinessCard from './BusinessCard';
import ToastWithBackdrop from './ToastWithBackdrop';
import Backdrop from './Backdrop';
import { initialState, reducer } from './reducer';
import MyContext from './context';
import { SchemaService } from '../services/schemaService';

function renderCards({ types, value }) {
  if (!types) return;
  const cardsSchema = SchemaService.getCardsSchema;
  // console.log(cardsSchema);
  const cards = cardsSchema?.map((item, index) => <BusinessCard key={index} item={item} />);
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
        <Backdrop customComponent={state?.customComponent || 'funFacts'} noButton={true}></Backdrop>
        <section className='cards'>{renderCards({ types: ['profile', 'mockCheckout', 'dropDownNavbar', 'sendTokens'] })}</section> 
      </MyContext.Provider>  
    </main>);
}


