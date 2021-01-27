import React, { Component } from "react";

class Home extends Component {
    state = {};
    render() {
        return (
            <div className="home-section" id="home">
                <h1>Hey, what's up? <span className="wave" >👋</span>😄</h1>
                <p> I'm Steven Yan.<br></br>A Software Engineer with a <br></br> Passion for UI/UX Design based in<br></br>Edmonton, Alberta.  </p>
            </div>
        );
    }

}

export default Home;
