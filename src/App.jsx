import React, { Component } from 'react';

import Header from './components/Header/Header.jsx';
import Cover from './components/Header/Cover.jsx';
import InfoBar from './components/Hero/InfoBar.jsx';
import Hero from './components/Hero/Hero.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cover url="https://visualhunt.com/photos/xl/1/vintage-electric-guitar.jpg"/>
        <InfoBar tweets="2.555" following="39" followers="6,98 mi" likes="351" />
        <Hero />
      </div>
    )
  }
}

export default App;
