import './Navbar.css';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className='inner-text'>
        <h1>ReactFacts</h1>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>);
}


