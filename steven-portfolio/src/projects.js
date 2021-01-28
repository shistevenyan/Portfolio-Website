import React, { Component } from "react";
import { setConfiguration, Container, Row, Col } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl' });

class Projects extends Component {
    state = {};
    render() {
        return (
            <Container className="projects-section" id="projects">
                <Row>
                    <h2>Projects</h2>
                </Row>
                <Row>
                    <Col sm={4}>
                        <h4>PeppeR Recommender</h4>
                        <p className="project-context">
                            A discussion recommender for the PeppeR Project, a collaborative learning environment for students. This was
                            worked on with Dr. Carrie Demmans Epp and EdTeKLA Research Group from the University of Alberta. This project
                            was coded using a LAMP (Linux, Apache, MySQL, PHP) environment.
                        </p>
                    </Col>
                    <Col sm={4}>
                        <h4>YeggerStop</h4>
                        <p className="project-context">
                            A webapp for Edmonton Transit System that tells you nearby bus stops along with their respective bus routes and times. Currently, 
                            this project is a Work in Progress and only displays nearby bus stops. This project is coded using a LAMP (Linux, Apache, MySQL, PHP) environment.
                        </p>
                    </Col>
                    <Col sm={4}>
                        <h4>Fooend</h4>
                        <p className="project-context">
                            An Android app that connects users with similar tastes in food. Currently, this project is a Work in Progress with fellow University of Alberta 
                            classmates. It is currently in the design phase on Figma. This project is coded using Android Studios environment. 
                        </p>
                    </Col>
                    
                </Row>
            </Container>
        );
    }

}

export default Projects;