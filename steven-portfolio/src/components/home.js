import React, { Component } from "react";
import '../styles/home.scss';
import { Link } from "react-scroll";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';

class Home extends Component {
    state = {};
    render() {
        return (
            <Container className="home-section" id="home" fluid={true}>
                <Row>
                    <Col md={12}>
                        <Fade top delay={500}>
                            <h1>Hey, how's it going? <span className="wave" >👋</span>😄</h1>
                            <br></br>
                        </Fade>
                    </Col>
                </Row>
                <Row>
                    <Fade left delay={1000}>
                        <Col md={12}>
                            <h2>My name is <span style={{ "background-color": "#FFFF00" }}>Steven Yan</span>. 🧍‍♂️</h2>
                            <br></br>
                        </Col>
                    </Fade>
                </Row>
                <Row>
                    <Fade bottom delay={2200}>
                        <Col md={12}>
                            <p className="home-context">
                                I am a <span style={{ "background-color": "#FFFF00" }}>Software Engineer</span> based in Edmonton, Alberta. 
                                I recently graduated from the University of Alberta in Computer Science and am currently looking for new opportunities. 
                                I have a passion for <span style={{ "background-color": "#FFFF00" }}> UI/UX Design and Front-End Development</span>. 
                                When designing interfaces, I prefer a minimalistic style, as you can probably tell. When relaxing, I enjoy playing 
                                video games (Genshin Impact or Valorant) and cooking.
                                <br />
                                <br />
                                Come check out what I've been doing! 👀
                            <br />
                                <br />
                            </p>

                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <button className="scrollProject">See Projects</button>
                            </Link>
                        </Col>        
                    </Fade>
                </Row>
            </Container>
            

        );
    }

}

export default Home;
