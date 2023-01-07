import { useEffect, useState } from 'react';
import './Content.css';
import FunFacts from './FunFacts';
import BusinessCard from './BusinessCard';
import BusinessCardLeft from './BusinessCardLeft';
import ToastWithBackdrop from './ToastWithBackdrop';
import CheckoutPage from './CheckoutPage';

export default function Content() {
  const [showToast, setshowToast] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setshowToast(false), 5800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="content">
      <ToastWithBackdrop show={showToast} />
      <section className='fun-facts'>
        <FunFacts />
      </section>
      <section className='shows'>
        <CheckoutPage />
      </section> 
      <section className='cards'>
        <BusinessCard />      
        <BusinessCardLeft />
      </section>        
    </main>);
}


