import React, { Component } from "react";
import '../styles/contact.scss';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';

class Contact extends Component {
    state = {};
    render() {
        return (
            <Container fluid className="contact-section" id="contact">
                <Row>
                    <Col md={12}>
                        <Fade delay={200}>
                            <h2>Contact ☎️</h2>
                        </Fade>
                    </Col>
                    
                </Row>
                <Row>
                    <Col md={12}>
                        <Fade bottom delay={300}>
                            <p className="contact-context">
                                <br></br>
                                I am always looking for new opportunities so don't be afraid to shoot me
                                a message through my <span style={{ "background-color": "#FFFF00" }}>email or LinkedIn</span>. 
                                I check both platforms frequently so I will try my best to get back at you as fast as I can. 
                                If you want, come check out my <span style={{ "background-color": "#FFFF00" }}>Github</span> to see what projects I am working on.
                                <br></br>
                                <br></br>
                            </p>
                        </Fade>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} sm={12} style={{ 'text-align': 'center' }}>
                        <Fade right delay={800}>
                            <a href="https://github.com/shistevenyan" target="_blank" className="contact-item">< AiFillGithub /></a>
                        </Fade>
                        <Fade right delay={1000}>
                            <a href="https://www.linkedin.com/in/shistevenyan/" target="_blank" className="contact-item">< AiFillLinkedin /></a>
                        </Fade>
                        <Fade right delay={1200}>
                            <a href="mailto:ssyan@ualberta.ca" className="contact-item">< MdEmail /></a>
                        </Fade>
                    </Col>
                </Row>


            </Container>

        );
    }

}

export default Contact;