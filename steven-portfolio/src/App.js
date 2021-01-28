import React, { Component } from "react";
import './App.css';

import Navbar from './nav';
import Home from './home';
import Projects from './projects';
import Contact from './contact';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl' });


class App extends Component {
  render() {
    return (
      <Container className="App">
        <Navbar />
        <Row>
          <Home />
        </Row>
        <Row>
          <Projects />
        </Row>
        <Row>
          <Contact />
        </Row>
      </Container>
    );
  }
}

export default App;