import './BusinessCard.css';
import ProfilePic from './ProfilePic';
import MailAndLinkedInButtons from './MailAndLinkedInButtons';
import 'animate.css';

export default function FunFacts() {
  return (
    <article className="business-card-container animate__animated animate__fadeInLeft">

      <section className="profile_pic">
        <div className="business-card__profile-pic-container">
          <ProfilePic />
        </div>
      </section>

      <section className="buttons-and-details">
        <h1 className='name'>Elad Sheskin</h1>
        <h4 className='role'>Fullstack Developer</h4>
        {/* <p className='website'>elad.website</p> */}
        <MailAndLinkedInButtons />
      </section>

      <section className="about">
        <h3 className='about__header'>About</h3>
        <p className='about__text'>Developing since 2015. Originaly LAMP
          stack, continued to MERN and MEVN following market demand. My last adventure
          included Ahoy!, an online yacht insurance platform for the US market.</p>
      </section>
    </article>);
}


