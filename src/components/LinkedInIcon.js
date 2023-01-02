import linkedInIcon from '../img/linkedin.png';
import './LinkedInIcon.css';

export default function LinkedInIcon() {
  return (
    <div className="linkedin-icon-container">
      <img src={linkedInIcon} className="linkedin-icon-container__icon" alt="linkedin-icon" />
    </div>
  );
}


