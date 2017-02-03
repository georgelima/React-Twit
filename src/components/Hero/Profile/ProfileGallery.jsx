import React from 'react';

import Photo from '../../Generics/Photo.jsx';

const ProfileGallery = ({ photos }) => (
  // to do map
  <div>
    <div className="row">
      <div className="col-xs-4">
        <a href="">
          <Photo url={ photos[0] } width="95px" height="95px" />
        </a>
      </div>
      <div className="col-xs-4">
        <Photo url={ photos[1] } width="95px" height="95px" />
      </div>
      <div className="col-xs-4">
        <Photo url={ photos[2] } width="95px" height="95px" />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-4">
        <Photo url={ photos[3] } width="95px" height="95px" />
      </div>
      <div className="col-xs-4">
        <Photo url={ photos[4] } width="95px" height="95px" />
      </div>
      <div className="col-xs-4">
        <Photo url={ photos[5] } width="95px" height="95px" />
      </div>
    </div>
  </div>
)

ProfileGallery.propTypes = {
  photos: function (props, propName, componentName) {
    if (!props[propName] || propName.length > 6) {
      return new Error(
        `The (photos) prop of the ProfileGallery must be an array with up to 6 elements`
      );
    }
  },
}

export default ProfileGallery;
