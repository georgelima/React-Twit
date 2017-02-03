import React from 'react';

const Topic = ({ content, tweetsAmount }) => (
  <div className="topic">
    <a href="#" className="topic-title">{ content }</a>
    <span className="topic-tweets-amount">{ tweetsAmount }</span>
  </div>
)

Topic.propTypes = {
  content: React.PropTypes.string,
  tweetsAmount: React.PropTypes.string
}

export default Topic;
