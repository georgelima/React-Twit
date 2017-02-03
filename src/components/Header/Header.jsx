import React, { Component } from 'react';

import NavButton from './NavButton';
import SearchBar from './SearchBar';
import Box from './Box';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBox: false
    }
  }

  showBox() {
    this.setState({
      showBox: !this.state.showBox
    });
  }

  render() {
    return (
      <header className="shadow">
        <div className="container">
          <div className="row">
            <div className="col-xs-1">
              <NavButton>
                <i style={{ color: "#1da1f2" }} className="fa fa-twitter"></i>
                <span className="content-btn">
                  Início
                </span>
              </NavButton>
            </div>
            <div className="col-xs-1">
              <NavButton>
                <i className="fa fa-bolt"></i>
                <span className="content-btn">
                  Moments
                </span>
              </NavButton>
            </div>

            <div className="col-xs-2 col-xs-offset-5">
              <SearchBar />
            </div>

            <div className="col-xs-3" style={{ display: "flex", justifyContent: "center", textAlign: "right" }}>
              <a href="#" onClick={ this.showBox.bind(this) }>Você possui uma conta? Entrar <i className="fa fa-caret-down"></i></a>
            </div>

          </div>
        </div>
        <Box show={ this.state.showBox } />
      </header>
    )
  }
}

export default Header;
