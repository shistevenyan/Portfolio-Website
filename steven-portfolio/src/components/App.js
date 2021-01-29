import React, { Component } from "react";
import '../styles/App.scss';

import Navbar from './nav';
import Home from './home';
import Projects from './projects';
import Contact from './contact';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

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