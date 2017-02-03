import React from 'react';

import ProfilePhoto from './ProfilePhoto.jsx';
import ProfileGallery from './ProfileGallery.jsx';
import ProfileInfo from './ProfileInfo.jsx';

const Profile = () => (
  <div className="profile">
    <ProfilePhoto
      url="https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg"
    />
    <ProfileInfo
      name="Elon Musk"
      twitter="@elonmusk"
      description="Tesla, SpaceX, Tunnels & OpenAI"
      from="1 AU"
      memberSince="Participa desde junho de 2009"
      amountOfMedia={ 207 }
    />
    <ProfileGallery
      photos={[
        "https://pbs.twimg.com/media/CwbUmDRVIAAiflz.jpg:thumb",
        "https://pbs.twimg.com/media/C2L7ygUUUAA1Ae9.jpg:thumb",
        "https://pbs.twimg.com/media/CtQbdtJVIAA7HCC.jpg:thumb",
        "https://pbs.twimg.com/media/CtQYMI4VIAAJY2N.jpg:thumb",
        "https://pbs.twimg.com/media/CtQbdtJVIAA7HCC.jpg:thumb",
        "https://pbs.twimg.com/media/C2L7ygUUUAA1Ae9.jpg:thumb",
      ]}
    />
  </div>
);

export default Profile;
