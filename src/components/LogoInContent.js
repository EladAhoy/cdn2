import logo from '../img/logo.svg';
import './LogoInContent.css';

export default function LogoInContent() {
  return (
    <div className="logo-in-content-container">
      <img src={logo} className="content-logo" alt="logo" />
    </div>
  );
}


