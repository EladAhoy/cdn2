import profile_pic from '../img/profile_pic.jpg';
import './ProfilePic.css';
import 'animate.css';

export default function ProfilePic() {
  return (
    <div className="profile-pic-container animate__animated animate__fadeInLeft">
      <img src={profile_pic} className="profile-pic-container__profile-pic" alt="logo" />
    </div>
  );
}


