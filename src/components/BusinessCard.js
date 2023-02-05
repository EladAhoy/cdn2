import './BusinessCard.css';
import ProfilePic from './ProfilePic';
import MailAndLinkedInButtons from './MailAndLinkedInButtons';
import 'animate.css';

function Card(props?) {
  const { item } = props;
  if (!item) return;
  return (
    <article className={item?.classNameList}>

      <section className="profile_pic">
        <div className="business-card__profile-pic-container">
          <ProfilePic src={item?.picSrc} />
        </div>
      </section>

      <section className="buttons-and-details">
        <h1 className='name'>{item?.name}</h1>
        <h4 className='role'>{item?.role}</h4>
        <MailAndLinkedInButtons style={{ opacity: 1 }} gitRef={{ gitName: item?.gitName }} type={item?.type} />
      </section>

      <section className="about">
        <h3 className='about__header'>{item?.aboutHeader}</h3>
        <p className='about__text'>{item?.aboutText}</p>
      </section>
    </article>);
}

export default function BusinessCard(props?) {
  const { item } = props;
  return <Card item={item} />;
}


