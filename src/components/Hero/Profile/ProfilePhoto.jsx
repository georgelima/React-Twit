import React from 'react';

const ProfilePhoto = ({ url }) => (
  <img src={ url } alt="User Profile" className="profile-photo" />
);

ProfilePhoto.propTypes = {
  url: React.PropTypes.string
}

export default ProfilePhoto;
