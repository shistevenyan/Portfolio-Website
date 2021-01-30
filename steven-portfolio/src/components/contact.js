import React, { Component } from "react";
import '../styles/contact.scss';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class Contact extends Component {
    state = {};
    render() {
        return (
            <Container fluid className="contact-section" id="contact">
                <Row>
                    <Col md={12}>
                        <h2>Contact</h2>
                    </Col>
                    
                </Row>
                <Row>
                    <Col md={12}>
                        <p className="contact-context">
                            <br></br>
                            I am always looking for new opportunities so don't be afraid to shoot me
                            a message through my email or LinkedIn. I check both platforms frequently
                            so I will try my best to get back at you as fast as I can. If you want, come look
                            my Github to check out what projects I am working on recently.
                            <br></br>
                            <br></br>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} sm={12} style={{ 'text-align': 'center' }}>
                        <li className="contact-item">
                            < AiFillGithub />
                        </li>
                        <li className="contact-item">
                            < AiFillLinkedin />
                        </li>
                        <li className="contact-item">
                            < MdEmail />
                        </li>
                    </Col>
                </Row>


            </Container>

        );
    }

}

export default Contact;