import React, { Component } from "react";
import './App.css';

import Navbar from './nav';
import Home from './home';
import Projects from './projects';
import Contact from './contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;