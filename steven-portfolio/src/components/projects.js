import React, { Component } from "react";
import '../styles/projects.scss';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import { VscLinkExternal } from "react-icons/vsc";

class Projects extends Component {
    state = {};
    render() {
        return (
            <Container className="projects-section" id="projects" fluid={true}>
                <Row>
                    <Col className="project-space">
                        <div></div>
                    </Col>
                    <Col sm={12}>
                        <Fade delay={200}>
                            <h2>Projects 🖥️</h2>
                        </Fade>
                    </Col> 
                </Row>
                <Row>
                    <Col sm={4}>
                        <Fade bottom delay={400}>
                            <br></br>
                            <h4><span style={{"background-color": "#FFFF00"}}>PeppeR Recommender</span></h4>
                            <p className="projects-context">
                                The PeppeR Recommender is a discussion recommender for the PeppeR Project, a <span style={{ "background-color": "#FFFF00" }}>collaborative learning environment 
                                for students</span>. 
                                I collaborated with Dr. Carrie Demmans  Epp and the <span style={{ "background-color": "#FFFF00" }}>EdTeKLA Research Group</span> from the University of Alberta. 
                                This project was created using a <span style={{ "background-color": "#FFFF00" }}>LAMP stack</span> (Linux, Apache, MySQL, PHP) environment.
                            </p>
                            <a href="https://pepperproject.ca/" target="_blank" className="projectLink"><VscLinkExternal /></a>
                            <br></br>
                        </Fade>
                    </Col>

                    <Col sm={4}>
                        <Fade bottom delay={600}>
                            <br></br>
                            <h4><span style={{ "background-color": "#FFFF00" }}>YeggerStop</span></h4>
                            <p className="projects-context">
                                YeggerStop is a web application for <span style={{ "background-color": "#FFFF00" }}> Edmonton Transit Systems</span>. 
                                YeggerStop tells you the nearby bus stops along with their respective bus routes and live arrival times. This project 
                                was used to learn how to create a <span style={{ "background-color": "#FFFF00" }}>Flask API </span> 
                                and a <span style={{ "background-color": "#FFFF00" }}>React webapp</span>. The Flask API is hosted on Heroku and the webapp is deployed on Netlify.
                            </p>
                            <a href="https://yeggerstop.netlify.app/" target="_blank" className="projectLink"><VscLinkExternal /></a>
                            <br></br>
                        </Fade>
                    </Col>

                    <Col sm={4}>
                        <Fade bottom delay={800}>
                            <br></br>
                            <h4><span style={{ "background-color": "#FFFF00" }}>Board</span></h4>
                            <p className="projects-context">
                                Board is an <span style={{ "background-color": "#FFFF00" }}> mobile app </span>
                                that finds users different board games that they can play based on some set criteras. Currently, 
                                this project is a Work in Progress with fellow University of Alberta CS classmates. 
                                It is currently in the <span style={{ "background-color": "#FFFF00" }}>design phase on Figma</span>. 
                                This project will be coded using <span style={{ "background-color": "#FFFF00" }}>React Native</span>. 
                                Come check out our design on  <span style={{ "background-color": "#FFFF00" }}>Figma</span>.
                            </p>
                            <a href="https://www.figma.com/file/7izO2NCfO8OBxONcvnhYoX/BoardGameFinder?node-id=0%3A1" target="_blank" className="projectLink"><VscLinkExternal /></a>
                        </Fade>
                    </Col>
                </Row>

                {/* <Row>
                    <Col>
                        <Fade bottom delay={1200}>
                            <br></br>
                            <br></br>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <button className="scrollContact">Contact Me</button>
                            </Link>
                        </Fade>
                    </Col>
                </Row> */}
            </Container>
        );
    }

}

export default Projects;