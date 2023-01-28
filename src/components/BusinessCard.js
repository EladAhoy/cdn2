import './BusinessCard.css';
import ProfilePic from './ProfilePic';
import MailAndLinkedInButtons from './MailAndLinkedInButtons';
import 'animate.css';

function MockCheckoutCard(props?) {
  const { type } = props;
  return (
    <article className="business-card-container-left animate__animated animate__fadeInRight">

      <section className="profile_pic">
        <div className="business-card__profile-pic-container">
          <ProfilePic src='ticket' />
        </div>
      </section>

      <section className="buttons-and-details">
        <h1 className='name'>Mock Checkout </h1>
        <h4 className='role'>Sample Project</h4>
        <MailAndLinkedInButtons style={{ opacity: 1 }} gitRef={{ gitName: 'mockCheckout' }} type={type} />
      </section>

      <section className="about">
        <h3 className='about__header'>About</h3>
        <p className='about__text'>The task is to create a mock checkout page for buying tickets to a show. Users should have the ability to select a show from a list of upcoming shows, select the quantity, enter their basic billing information (you don't need to actually accept real credit card data, just simulate how this part should work), and see their final cost with fees before checking out. It should look like TicketMaster's website checkout page as reference).</p>
      </section>
    </article>);
}

function DropdownNavbarCard(props?) {
  const { type } = props;
  return (
    <article className="business-card-container-left animate__animated animate__fadeInRight">

      <section className="profile_pic">
        <div className="business-card__profile-pic-container">
          <ProfilePic src='menu-key' />
        </div>
      </section>

      <section className="buttons-and-details">
        <h1 className='name'>Dropdown Menu</h1>
        <h4 className='role'>Sample Project</h4>
        <MailAndLinkedInButtons style={{ opacity: 1 }} gitRef={{ gitName: 'mockCheckout' }} type={type} />
      </section>

      <section className="about">
        <h3 className='about__header'>About</h3>
        <p className='about__text'>The task is to create an dropdown menu that gets a JSON object
          as input, and uses recursion to include nested dropdwon menus as needed. No need to solve overlapping issues.</p>
      </section>
    </article>);
}

export default function BusinessCard(props?) {
  if (props) {
    const { type } = props;
    if (type === 'mockCheckout') return <MockCheckoutCard type={type} />;
    if (type === 'navbar') return <DropdownNavbarCard type={type} />;
  }
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


