import React from 'react';

const SeachBar = ({ callback }) => (
  <form>
    <input type="text" className="search-box" placeholder="Buscar no Twitter"/>
    <button className="search-btn" type="submit" onClick={ () => callback() }>
      <i className="fa fa-search"></i>
    </button>
  </form>
);

SeachBar.propTypes = {
  callback: React.PropTypes.func
}

export default SeachBar;
