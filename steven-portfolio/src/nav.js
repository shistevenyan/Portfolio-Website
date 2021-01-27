import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    );
  }
}

export default Navbar;