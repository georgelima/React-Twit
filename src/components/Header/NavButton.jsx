import React from 'react';

const NavButton = ({ children }) => (
  <button className="nav-btn">
    { children }
  </button>
);

NavButton.propTypes = {
  children: React.PropTypes.node
}

export default NavButton;
