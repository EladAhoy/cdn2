import './ProfilePic.css';
import profile_pic from '../img/profile_pic.jpg';

export default function ProfilePic(props?) {
  const handleMouseEnter = (event) => {
    const containerDiv = event.currentTarget;
    const imgTagSrc = containerDiv?.children[0]?.src;
    if (!!imgTagSrc) containerDiv.children[0].src = props.gifSrc;
  };
  const handleMouseLeave = (event) => {
    const containerDiv = event.currentTarget;
    const imgTagSrc = containerDiv?.children[0]?.src;
    if (!!imgTagSrc) containerDiv.children[0].src = props.src;
  };
  const { type } = props;
  const typeCondition = type && ['profile'].includes(type);
  const defaultSrc = typeCondition ? profile_pic : "https://media3.giphy.com/media/tqj4m9BRURayxQAIW9/200w_d.gif?cid=ed15dd37rlh47fd8wlu3yw19bawhf8ttcoqwb069p8adkvkb&rid=200w_d.gif&ct=g";
  const defaultImg = <img src={defaultSrc} className="profile-pic-container__profile-pic" alt="logo" />
  return (
    <div className="profile-pic-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {(props.src && !typeCondition) ? <img src={props.src} className="profile-pic-container__profile-pic" alt="logo" /> : defaultImg}
    </div>
  );
}

