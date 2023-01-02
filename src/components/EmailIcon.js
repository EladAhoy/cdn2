import emailIcon from '../img/apple-mail.png';
import './EmailIcon.css';

export default function EmailIcon() {
  return (
    <div className="email-icon-container">
      <img src={emailIcon} className="email-icon-container__icon" alt="email-icon" />
    </div>
  );
}


