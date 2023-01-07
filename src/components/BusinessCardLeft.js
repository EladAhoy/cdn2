import './BusinessCardLeft.css';
import ProfilePic from './ProfilePic';
import MailAndLinkedInButtons from './MailAndLinkedInButtons';
import 'animate.css';

export default function BusinessCardLeft() {
  return (
    <article className="business-card-container-left animate__animated animate__fadeInRight">

      <section className="profile_pic">
        <div className="business-card__profile-pic-container">
          <ProfilePic src='../img/ticket-2.svg' />
        </div>
      </section>

      <section className="buttons-and-details">
        <h1 className='name'>Mock Checkout </h1>
        <h4 className='role'>Sample Project</h4>
        {/* <p className='website'>&nbsp</p> */}
        <MailAndLinkedInButtons style={{ opacity: 0 }} />
      </section>

      <section className="about">
        <h3 className='about__header'>About</h3>
        <p className='about__text'>The task is to create a mock checkout page for buying tickets to a show. Users should have the ability to select a show from a list of upcoming shows, select the quantity, enter their basic billing information (you don't need to actually accept real credit card data, just simulate how this part should work), and see their final cost with fees before checking out. It should look like TicketMaster's website checkout page as reference).</p>
      </section>
    </article>);
}


