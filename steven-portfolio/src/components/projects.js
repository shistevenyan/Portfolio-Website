import React, { Component } from "react";
import '../styles/projects.scss';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';

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
                            <h2>Projects</h2>
                        </Fade>
                    </Col> 
                </Row>
                <Row>
                    <Col sm={4}>
                        <Fade bottom delay={400}>
                            <h4>PeppeR Recommender</h4>
                            <p className="projects-context">
                                A discussion recommender for the PeppeR Project, a collaborative learning environment for students. This was
                                worked on with Dr. Carrie Demmans Epp and EdTeKLA Research Group from the University of Alberta. This project
                                was coded using a LAMP (Linux, Apache, MySQL, PHP) environment.
                            </p>
                        </Fade>
                    </Col>
                    <Col sm={4}>
                        <Fade bottom delay={600}>
                        <h4>YeggerStop</h4>
                        <p className="projects-context">
                            A webapp for Edmonton Transit System that tells you nearby bus stops along with their respective bus routes 
                            and times. Currently, this project is a Work in Progress and only displays nearby bus stops. This project 
                            is coded using a LAMP (Linux, Apache, MySQL, PHP) environment.
                        </p>
                        </Fade>
                    </Col>
                    <Col sm={4}>
                        <Fade bottom delay={800}>
                            <h4>Fooend</h4>
                            <p className="projects-context">
                                An Android app that connects users with similar tastes in food. Currently, this project is a Work in Progress 
                                with fellow University of Alberta classmates. It is currently in the design phase on Figma. This project is 
                                coded using theAndroid Studios environment. 
                            </p>
                        </Fade>
                    </Col>
                    
                </Row>
            </Container>
        );
    }

}

export default Projects;