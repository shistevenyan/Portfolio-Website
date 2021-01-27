import React, { Component } from "react";
import './App.css';

class Home extends Component {
    state = {};
    render() {
        return (
            <div className="home-section" id="home">
                <h1>Hey, what's up? <span className="wave" >👋</span>😄</h1>
                <h2>I'm Steven Yan.</h2>
                <p>
                    I am a Software Engineer based in Edmonton, Alberta. I recently<br></br> 
                    graduated from the University of Alberta in Computer Science <br></br>
                    and am currently looking for new opportunities. I have an interest <br></br>
                    in UI/UX Design and Front-End Development.
                </p>
                <p>Come check out what I been working on...</p>
            </div>
        );
    }

}

export default Home;
