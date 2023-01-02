import './MailAndLinkedInButtons.css';
import LinkedInIcon from './LinkedInIcon';
import EmailIcon from './EmailIcon';

export default function MailAndLinkedInButtons() {
  return (
    <section className="buttons-container">
      <button className='email'>
        <EmailIcon />
        Email
      </button>
      <button className='linked-in'>
        <LinkedInIcon />
        LinkedIn
      </button>
    </section>);
}


