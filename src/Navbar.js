import './Navbar.css';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className="navbar">
    <Logo />
      <div className='inner-text'>
        <h1>Example Site</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
        </ul>
      </div>
  </nav>);
}

export default Navbar;
