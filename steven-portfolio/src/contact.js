import React, { Component } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { setConfiguration, Container, Row, Col } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl' });

class Contact extends Component {
    state = {};
    render() {
        return (
            <Container className="contact-section" id="contact">
                <Row>
                    <h2>Contact</h2>
                </Row>
                <Row align="center">
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
                    <p>
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