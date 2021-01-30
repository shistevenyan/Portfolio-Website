import React, { Component } from "react";
import { default as BSNavbar } from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { animateScroll as scroll } from "react-scroll";
import { scroller } from "react-scroll";
import logo from "../styles/logo.svg";
import '../styles/nav.scss';
import Fade from 'react-reveal/Fade';


class Navbar extends Component {
  state = {};

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render(){
    return (
      <div className="navbar-wrapper">
        <BSNavbar collapseOnSelect expand="sm">
          <BSNavbar.Brand className="logo">
            <Fade top>
              <img
                src={logo}
                className="nav-logo"
                alt="Logo"
                onClick={this.scrollToTop}
              />
            </Fade>
          </BSNavbar.Brand>
          <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BSNavbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link
                onClick={() => scroller.scrollTo('projects', {
                  smooth: true,
                  offset: 0,
                  duration: 500,
                })}
              >
                <Fade top>Projects</Fade>
              </Nav.Link>

              <Nav.Link
                onClick={() => scroller.scrollTo('contact', {
                  smooth: true,
                  offset: 0,
                  duration: 500,
                })}
              >
                <Fade top>Contact</Fade>
              </Nav.Link>

            </Nav>
          </BSNavbar.Collapse>
        </BSNavbar>
      </div>
    );
  }
}

export default Navbar;
