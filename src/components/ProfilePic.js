import profile_pic from '../img/profile_pic.jpg';
import './ProfilePic.css';
import TicketPic from './TicketPic';

export default function ProfilePic(props?) {
  return (
    <div className="profile-pic-container">
      {props.src ? <TicketPic /> : <img src={profile_pic} className="profile-pic-container__profile-pic" alt="logo" />}
    </div>
  );
}


