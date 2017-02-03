import React from 'react';

import Level from '../Generics/Level.jsx';

const InfoBar = ({ tweets, following, followers, likes }) => (
  <div className="info-bar shadow">
    <div className="row">
      <div className="col-xs-6 col-xs-offset-3">
        <div className="row">
          <div className="col-xs-3 col-md-3">
            <Level title="tweets" content={ tweets } />
          </div>
          <div className="col-xs-3 col-md-3">
            <Level title="seguindo" content={ following } />
          </div>
          <div className="col-xs-3 col-md-3">
            <Level title="seguidores" content={ followers } />
          </div>
          <div className="col-xs-3 col-md-3">
            <Level title="curtidas" content={ likes } />
          </div>
        </div>
      </div>
      <div className="col-xs-3">
        <button className="btn shadow"><i className="fa fa-user-plus"></i>Seguir</button>
      </div>
    </div>
  </div>
);

InfoBar.propTypes = {
  tweets: React.PropTypes.string,
  following: React.PropTypes.string,
  followers: React.PropTypes.string,
  likes: React.PropTypes.string,
}

export default InfoBar;
