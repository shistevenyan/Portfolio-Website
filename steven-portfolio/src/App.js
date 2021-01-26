import './App.css';
import React from "react";

import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Navbar from './nav';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;