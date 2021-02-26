import React, { Component } from "react";
import { default as BSNavbar } from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { scroller, animateScroll as scroll } from "react-scroll";
import logo from "../styles/websiteLogo.png";
import '../styles/nav.scss';
import Fade from 'react-reveal/Fade';
import Pdf from "./ShiYanResume2021.pdf";


class Navbar extends Component {
  state = {};

  onResumeClick = () => {
    window.open(Pdf);
  }

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
                <Fade top className="nav-text">Projects</Fade>
              </Nav.Link>

              <Nav.Link
                onClick={() => scroller.scrollTo('contact', {
                  smooth: true,
                  offset: 0,
                  duration: 500,
                })}
              >
                <Fade top className="nav-text">Contact</Fade>
              </Nav.Link>

              <Nav.Link href={Pdf} target="_blank"           
              >
                <Fade top className="nav-text">Resume</Fade>
              </Nav.Link>

            </Nav>
          </BSNavbar.Collapse>
        </BSNavbar>
      </div>
    );
  }
}

export default Navbar;
