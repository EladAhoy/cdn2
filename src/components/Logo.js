import logo from '../img/logo.svg';
import './Logo.css';

export default function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} className="App-logo" alt="logo" />     
    </div>
  );
}


