import React, { Component } from "react";
import '../styles/projects.scss';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import { Link } from "react-scroll";
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
                            <br></br>
                        </Fade>
                    </Col> 
                </Row>
                <Row>
                    <Col sm={4}>
                        <Fade bottom delay={400}>
                            <h4>PeppeR Recommender</h4>
                            <p className="projects-context">
                                The PeppeR Recommender is a discussion recommender for the PeppeR Project, a collaborative learning environment 
                                for students. I collaborated with Dr. Carrie Demmans Epp and the EdTeKLA Research Group from the University of 
                                Alberta. This project was made using a LAMP stack (Linux, Apache, MySQL, PHP) environment.
                            </p>
                            <a href="https://github.com/shistevenyan" target="_blank" className="projectLink"><VscLinkExternal /></a>
                        </Fade>
                    </Col>

                    <Col sm={4}>
                        <Fade bottom delay={600}>
                            <h4>YeggerStop</h4>
                            <p className="projects-context">
                                YeggerStop is a web application for the Edmonton Transit System. YeggerStop tells you the nearby bus stops along with their 
                                respective bus routes and arrival times. Currently, this project is a Work in Progress and only displays nearby 
                                bus stops. This project is coded using a LAMP stack (Linux, Apache, MySQL, PHP) environment.
                            </p>
                            <a href="https://github.com/shistevenyan" target="_blank" className="projectLink"><VscLinkExternal /></a>
                        </Fade>
                    </Col>

                    <Col sm={4}>
                        <Fade bottom delay={800}>
                            <h4>Fooend</h4>
                            <p className="projects-context">
                                Fooend is an Android app that connects users with similar tastes in food and allows them to meet up for a meal. Currently, 
                                this project is a Work in Progress with some fellow University of Alberta CS classmates. It is currently in the design phase on 
                                Figma. This project will be coded using the Android Studio environment. Look forward to new updates in mid-2021.
                            </p>
                            <a href="https://github.com/shistevenyan" target="_blank" className="projectLink"><VscLinkExternal /></a>
                        </Fade>
                    </Col>
                </Row>

                <Row>
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
                </Row>
            </Container>
        );
    }

}

export default Projects;