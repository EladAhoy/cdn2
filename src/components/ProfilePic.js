import profile_pic from '../img/profile_pic.jpg';
import './ProfilePic.css';

export default function ProfilePic() {
  return (
    <div className="profile-pic-container">
      <img src={profile_pic} className="profile-pic-container__profile-pic" alt="logo" />
    </div>
  );
}


