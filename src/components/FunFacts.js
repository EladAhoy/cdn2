import './FunFacts.css';
import LogoInContent from './LogoInContent';

export default function FunFacts() {
  return (
    <article className="fun-facts-container">
      <h1>Fun facts about React</h1>
      <div className="fun-facts__logo-container">
        <LogoInContent />
      </div>
      <ul className="fun-facts__facts-list animate__animated animate__rollIn">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </article>);
}


