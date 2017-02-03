import React from 'react';

const Photo = ({ url, width, height }) => (
  <img src={ url } alt="" style={{ width: width, height: height }} />
);

Photo.propTypes = {
  url: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
}

export default Photo;
