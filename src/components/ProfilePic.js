// import profile_pic from '../img/profile_pic.jpg';

// import { useState, useEffect } from 'react';
// import { GifService } from '../services/gifService';
import EthLogo from './EthLogo';
import MenuKey from './MenuKey';
import './ProfilePic.css';
import TicketPic from './TicketPic';

const imgsMap = {
  'ticket': <TicketPic />,
  'menu-key': <MenuKey />,
  'send-eth': <EthLogo />
}


export default function ProfilePic(props?) {
  // const [gifsData, setGifsData] = useState(null);
  // useEffect(() => {
  //   async function fetchGifs() {
  //     const gifs = await GifService.getGifs();
  //     // console.log({ gifs });
  //     setGifsData({ gifs });
  //   }
  //   fetchGifs();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <div className="profile-pic-container">
      {/* {gifsData ? gifsData?.gifs?.data?.map(el => console.log(el.id)) : ''} */}
      {props.src ? imgsMap[props.src] : <img src="https://media3.giphy.com/media/tqj4m9BRURayxQAIW9/200w_d.gif?cid=ed15dd37rlh47fd8wlu3yw19bawhf8ttcoqwb069p8adkvkb&rid=200w_d.gif&ct=g" className="profile-pic-container__profile-pic" alt="logo" />}
      {/* {props.src ? imgsMap[props.src] : <img src={profile_pic} className="profile-pic-container__profile-pic" alt="logo" />} */}
    </div>
  );
}

//  Line 26:6:  React Hook useEffect has a missing dependency: 'gifsData'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
