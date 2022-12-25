import './Navbar.css';
import Logo from './Logo';

function Navbar() {
  return (<nav className="navbar">
    <Logo />
    <h1>Example Site</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>);
}

export default Navbar;
