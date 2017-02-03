import React from 'react';

const Level = ({ title, content }) => (
  <div className="level">
    <span className="level-title">{ title }</span>
    <span className="level-content">{ content }</span>
  </div>
);

Level.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string
}

export default Level;
