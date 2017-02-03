import React from 'react';

const ProfileInfo = ({ name, twitter, description, from, memberSince, amountOfMedia  }) => (
  <div>
    <h1>{ name }<i className="fa fa-check-square-o" style={{ color: "#77C7F7" }}></i></h1>
    <a href="#">{ twitter }</a>
    <p>{ description }</p>
    <p><i className="fa fa-map-marker"> </i> { from }</p>
    <p><i className="fa fa-calendar"></i> { memberSince }</p>
    <p><i className="fa fa-camera"></i> <a href="#">{ amountOfMedia } fotos e vídeos!</a></p>
  </div>
);

ProfileInfo.propTypes = {
  name: React.PropTypes.string,
  twitter: React.PropTypes.string,
  description: React.PropTypes.string,
  from: React.PropTypes.string,
  memberSince: React.PropTypes.string,
  amountOfMedia: React.PropTypes.number
}

export default ProfileInfo;
