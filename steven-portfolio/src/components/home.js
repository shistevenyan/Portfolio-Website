import React, { Component } from "react";
import '../styles/home.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class Home extends Component {
    state = {};
    render() {
        return (
            <Container className="home-section" id="home" fluid={true}>
                <Row>
                    <Col md={12}>
                        <h1>Hey, how's it going? <span className="wave" >👋</span>😄</h1>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h2>My name is Steven Yan. 🧍‍♂️</h2>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p className="home-context">
                            I am a Software Engineer based in Edmonton, Alberta. I recently graduated from the University of Alberta
                            in Computer Science and am currently looking for new opportunities. I have a passion in UI/UX Design and
                            Front-End Development. When designing, I prefer a minimalistic style, as you can probably tell. When 
                            relaxing, I enjoy playing video games, such as Genshin Impact or Valorant, and cooking.
                            <br />
                            <br />
                            Come check out what I been doing...
                            <br />
                            <br />
                        </p>
                    </Col>
                    <Col md={3}>            
                    </Col>
                </Row>

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
            </Container>
            

        );
    }

}

export default Home;
