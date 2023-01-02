import './Content.css';
import FunFacts from './FunFacts';
import BusinessCard from './BusinessCard';
import BusinessCardLeft from './BusinessCardLeft';

export default function Content() {
  return (
    <main className="content">
      <FunFacts />
      <section className='cards'>
        <BusinessCard />      
        <BusinessCardLeft />
      </section>      
    </main>);
}


