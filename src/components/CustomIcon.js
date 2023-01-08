import emailIcon from '../img/apple-mail.png';
import gitIcon from '../img/github.png';
import './CustomIcon.css';

export default function CustomIcon(props?) {
  if (props?.type === 'git') return (
    <div className="custom-icon-container">
      <img src={gitIcon} className="email-icon-container__icon" alt="email-icon" />
    </div>
  );
  return (
    <div className="custom-icon-container">
      <img src={emailIcon} className="email-icon-container__icon" alt="email-icon" />
    </div>
  );
}


