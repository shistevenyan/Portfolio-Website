import React, { Component } from "react";
import './App.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { setConfiguration, Container, Row, Col } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl' });

class Home extends Component {
    state = {};
    render() {
        return (
            <Container className="home-section" id="home">
                <Row>
                    <h1>Hey, how's it going? <span className="wave" >👋</span>😄</h1>
                    <Col sm={12}>
                        <h2>My name is Steven Yan. 🧍‍♂️</h2>
                    </Col>
                    <Col sm={12}>
                        <p className="home-context">
                            I am a Software Engineer based in Edmonton, Alberta. I recently graduated from the
                            University of Alberta in Computer Science and am currently looking for new opportunities.
                            In terms of work, I have an interest in UI/UX Design and Front-End Development.
                            When designing, I personally like a more minimalistic style, as you can probably tell from
                            this webpage. I enjoy playing video games such as Genshin Impact and
                            Valorant or cooking when I am not working. Now that I finished with my self-introduction,
                            come check out what I been working on...
                        </p>
                    </Col>

                    <Col sm={12}>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <button className="scrollProject">Scroll Down</button>
                        </Link>
                    </Col>

                </Row>
            </Container>
            

        );
    }

}

export default Home;
