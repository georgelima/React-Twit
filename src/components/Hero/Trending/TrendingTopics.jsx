import React from 'react';

import Topic from './Topic';

const TrendingTopics = ({ title, topics }) => {
  function renderTopics() {
    return topics.map((topic, index) => {
      return (
        <Topic key={ index } content={ topic.content } tweetsAmount={ topic.tweetsAmount } />
      )
    });
  }

  return (
    <div className="trending shadow">
      <h1>{ title }</h1>
      { renderTopics() }
    </div>
  )
};

TrendingTopics.propTypes = {
  title: React.PropTypes.string.isRequired,
  topics: React.PropTypes.arrayOf(React.PropTypes.shape({ content: React.PropTypes.string, tweetsAmount: React.PropTypes.string })).isRequired
}

export default TrendingTopics;
