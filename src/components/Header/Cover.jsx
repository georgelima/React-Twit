import React from 'react';

const Cover = ({ url }) => (
  <div className="cover" style={{ backgroundImage: `url(${url})` }}>
  </div>

);

Cover.propTypes = {
  url: React.PropTypes.string.isRequired
}

export default Cover;
