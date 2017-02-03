import React, { Component } from 'react';

import Profile from './Profile/Profile.jsx';
import Tweets from './Tweets/Tweets.jsx';
import TrendingTopics from './Trending/TrendingTopics.jsx';

class Hero extends Component {
  render() {
    return (
      <div className="container hero">
        <div className="row">
          <div className="col-xs-3">
            <Profile />
          </div>
          <div className="col-xs-6">
            <Tweets />
          </div>
          <div className="col-xs-3">
            <TrendingTopics
              title="Assuntos do Momento: Mundial"
              topics={[
                {content: "#RecomendeUmLivro", tweetsAmount: "22 mil Tweets"},
                {content: "#HistoriaDeVerão", tweetsAmount: "50 mil Tweets"},
                {content: "#Louvre", tweetsAmount: "251 mil Tweets"},
                {content: "#Marinalva", tweetsAmount: "28,2 mil Tweets"},
                {content: "#Lorenzo", tweetsAmount: "258 mil Tweets"} 
              ]}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
