import profile_pic from '../img/profile_pic.jpg';
import MenuKey from './MenuKey';
import './ProfilePic.css';
import TicketPic from './TicketPic';

const imgsMap = {
  'ticket': <TicketPic />,
  'menu-key': <MenuKey />
}

export default function ProfilePic(props?) {
  return (
    <div className="profile-pic-container">
      {props.src ? imgsMap[props.src] : <img src={profile_pic} className="profile-pic-container__profile-pic" alt="logo" />}
    </div>
  );
}


