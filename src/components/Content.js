import { useEffect, useState, useReducer } from 'react';
import './Content.css';
import BusinessCard from './BusinessCard';
import ToastWithBackdrop from './ToastWithBackdrop';
import Backdrop from './Backdrop';
import { initialState, reducer } from './reducer';
import MyContext from './context';
import { SchemaService } from '../services/schemaService';
import { GifService } from '../services/gifService';

function renderCards({ types, value, gifsData }) {
  if (!types || !gifsData) return;
  console.log({ gifsData })
  const cardsSchema = SchemaService.getCardsSchema;
  // console.log(cardsSchema);
  const cards = cardsSchema?.map((item, index) => <BusinessCard key={index} item={item} />);
  return (cards);
}

export default function Content() {

  const [showToast, setshowToast] = useState(true);
  const [gifsData, setGifsData] = useState(null);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setshowToast(false), 5800);
    return () => clearTimeout(timer);
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchGifs() {
      const gifs = await GifService.getGifs();
      alert('!');
      setGifsData({ gifs });
      setFirstRender(false);
    }
    if (!gifsData && firstRender) fetchGifs();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="content">
      <ToastWithBackdrop show={showToast} />
      <MyContext.Provider value={{ state, dispatch }}>
        <Backdrop customComponent={state?.customComponent || 'funFacts'} noButton={true}></Backdrop>
        <section className='cards'>{renderCards({ gifsData, types: ['profile', 'mockCheckout', 'dropDownNavbar', 'sendTokens'] })}</section> 
      </MyContext.Provider>  
    </main>);
}


