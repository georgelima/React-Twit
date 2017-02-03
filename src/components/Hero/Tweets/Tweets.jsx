import React from 'react';

import Tweet from './Tweet';

const Tweets = () => (
  <div className="tweets shadow">
    <div className="info-tweets shadow">
      <a href="#">Tweets</a>
      <a href="#">Tweets e respostas</a>
      <a href="#">Mídia</a>
    </div>
    <Tweet
      photo="https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg"
      author={{ name: "Elon Musk", twitter: "@elonmusk" }}
      postedAt="13h"
    >
      Regarding the meeting at the White House:
      <img src="https://pbs.twimg.com/media/C3tErztXUAAS5de.jpg" alt="Tweet"/>
    </Tweet>
    <Tweet
      photo="https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg"
      author={{ name: "Elon Musk", twitter: "@elonmusk" }}
      postedAt="13h"
    >
      Top AI researchers agree on principles for developing benefical AI
      <img src="https://pbs.twimg.com/card_img/825976830649700352/9WoEhi6Q?format=jpg&name=386x202" alt="Tweet" />
    </Tweet>
  </div>
);

export default Tweets;
