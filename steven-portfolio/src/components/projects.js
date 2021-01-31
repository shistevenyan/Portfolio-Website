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
                                I collaborated with Dr. Carrie Demmans Epp and the <span style={{ "background-color": "#FFFF00" }}>EdTeKLA Research Group</span> from the University of Alberta. 
                                This project was made using a <span style={{ "background-color": "#FFFF00" }}>LAMP stack</span> (Linux, Apache, MySQL, PHP) environment.
                            </p>
                            <a href="https://github.com/shistevenyan" target="_blank" className="projectLink"><VscLinkExternal /></a>
                            <br></br>
                        </Fade>
                    </Col>

                    <Col sm={4}>
                        <Fade bottom delay={600}>
                            <br></br>
                            <h4><span style={{ "background-color": "#FFFF00" }}>YeggerStop</span></h4>
                            <p className="projects-context">
                                YeggerStop is a web application for the <span style={{ "background-color": "#FFFF00" }}> Edmonton Transit System</span>. 
                                YeggerStop tells you the nearby bus stops along with their respective bus routes and arrival times. Currently, this 
                                project is a Work in Progress and only displays nearby bus stops. 
                                This project is coded using a <span style={{ "background-color": "#FFFF00" }}>LAMP stack</span> (Linux, Apache, MySQL, PHP) environment.
                            </p>
                            <a href="https://github.com/shistevenyan" target="_blank" className="projectLink"><VscLinkExternal /></a>
                            <br></br>
                        </Fade>
                    </Col>

                    <Col sm={4}>
                        <Fade bottom delay={800}>
                            <br></br>
                            <h4><span style={{ "background-color": "#FFFF00" }}>Fooend</span></h4>
                            <p className="projects-context">
                                Fooend is an <span style={{ "background-color": "#FFFF00" }}> Android app </span>
                                that connects users with similar tastes in food and allows them to meet up for a meal. Currently, 
                                this project is a Work in Progress with some fellow University of Alberta CS classmates. 
                                It is currently in the <span style={{ "background-color": "#FFFF00" }}>design phase on Figma</span>. 
                                This project will be coded using the <span style={{ "background-color": "#FFFF00" }}>Android Studio environment</span>. 
                                Look forward to new updates in <span style={{ "background-color": "#FFFF00" }}>mid-2021</span>.
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