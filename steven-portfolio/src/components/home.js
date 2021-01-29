import React, { Component } from "react";
import '../styles/home.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'

class Home extends Component {
    state = {};
    render() {
        return (
            <Container className="home-section" id="home" fluid={true}>
                <Row>
                    <h1 style = {{'padding-left': '200px'}}>Hey, how's it going? <span className="wave" >👋</span>😄</h1>
                    <h2 style={{ 'padding-left': '200px' }}>My name is Steven Yan. 🧍‍♂️</h2>
                    <p className="home-context" style={{ 'padding-left': '200px' }}>
                        I am a Software Engineer based in Edmonton, Alberta. I recently graduated from the University of Alberta 
                        in Computer Science and am currently looking for new opportunities. I have a passion in UI/UX Design and
                        Front-End Development. When designing, I prefer a minimalistic style, as you can probably tell from this 
                        webpage. When relaxing, I enjoy playing video games, such as Genshin Impact or Valorant, and cooking.
                        <br/>
                        <br/>
                        Come check out what I been doing...
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
                </Row>
            </Container>
            

        );
    }

}

export default Home;
