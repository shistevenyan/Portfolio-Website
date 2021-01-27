import React, { Component } from "react";

class Projects extends Component {
    state = {};
    render() {
        return (
            <div className="projects-section" id="projects">
                <h2>Projects</h2>
                <div class="row">
                    <div class="column">
                        <h4>PeppeR Recommender</h4>
                        <p className="context">A discussion recommender for the PeppeR Project, a collaborative learning environment for students.</p>
                    </div>
                    <div class="column">
                        <h4>YeggerStop</h4>
                        <p className="context">A webapp for Edmonton Transit System that tells you nearby bus stops along with their respective bus routes and times. (Work in Progress)</p>
                    </div>
                    <div class="column">
                        <h4>Fooend</h4>
                        <p className="context">An Android app that connects users with similar tastes in food. (Work in Progress)</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Projects;