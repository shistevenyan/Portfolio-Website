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
                    <h2>Contact</h2>
                </Row>
                <Row style={{'text-align': 'center'}}>
                    <li className="contact-item">
                        < AiFillGithub />
                    </li>
                    <li className="contact-item">
                        < AiFillLinkedin />
                    </li>
                    <li className="contact-item">
                        < MdEmail />
                    </li>
                </Row>
                <Row>
                    <p className="contact-context">
                    I am always looking for new opportunities so don't be afraid to shoot me
                    a message through my email or LinkedIn! I check both platforms frequently
                    so I will try my best to get back at you as fast as I can! Also come look
                    my Github to check out what recent projects I am working on!
                    </p>
                </Row>


            </Container>

        );
    }

}

export default Contact;