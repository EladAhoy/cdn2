import { useRef, useEffect } from 'react';
import './Content.css';
import FunFacts from './FunFacts';
import BusinessCard from './BusinessCard';
import BusinessCardLeft from './BusinessCardLeft';
import ToastWithBackdrop from './ToastWithBackdrop';

export default function Content() {
  const showToastRef = useRef(true);
  useEffect(() => {
    const timer = setTimeout(() => showToastRef.current = false, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="content">
      <ToastWithBackdrop show={showToastRef.current} />
      <section className='fun-facts'>
        <FunFacts />
      </section>
      <section className='cards'>
        <BusinessCard />      
        <BusinessCardLeft />
      </section>      
    </main>);
}


