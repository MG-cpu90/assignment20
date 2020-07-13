import React, { Component } from "react";
import Hero from "../components/Hero";
import Table from "../components/Table";
import backgroundImage from "./computer-coding.png";
import { render } from "react-dom";
import backgroundPic from "./background.jpg";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import CardProject1 from "../components/CardProject1";
import CardProject2 from "../components/CardProject2";

class Projects extends Component {
  state = {
    projects: [
      {
        name: "Project #1: ReciPlease",
        description: "A website that allows users to search for detailed recipe instructions based on the ingredients they have in their pantry.",
        technologies: [
          "HTML",
          "CSS",
          "Bulma CSS Framework",
          "JavaScript",
          "jQuery",
          "Google Fonts",
          "JSON",
          "Spponacular API",
          "Wikipedia API",
          "AJAX",
          "Git/Terminal",
          "Slack",
          "GitHub"
        ],
        url: "https://mg-cpu90.github.io/project1/",
        GitHub: "https://github.com/MG-cpu90/project1"
      },
      {
        name: "Project #2: Thankly",
        description: "A gratitude journal that allows users struggling with poor mental health to cope with isolation during the COVID-19 health crisis.",
        technologies: [
          "HTML",
          "CSS",
          "Materialize CSS Framework",
          "JavaScript",
          "jQuery",
          "Google Fonts",
          "Font Awesome",
          "JSON",
          "Node",
          "Express",
          "Sequelize",
          "ESLint",
          "Moment",
          "PDFKit",
          "InvisionApp",
          "moqups.com",
          "W3Schools",
          "Stack Overflow",
          "Type.Fit API",
          "Slow Country Comics",
          "MySQL",
          "Git/Terminal",
          "Visual Studio Code",
          "Zoom",
          "Google Chrome",
          "Slack",
          "GitHub",
          "Heroku",
          "Adobe InDesign",
          "JawsDB"

        ],
        url: "https://thankly-test.herokuapp.com/",
        GitHub: "https://github.com/MG-cpu90/thankly"
      },
      {
        name: "Project #3: Link-N-Park",
        description: "A full-stack react application that allows users to find bike stations and parking spots.",
        technologies: [
          "HTML",
          "CSS",
          "Materialize CSS Framework",
          "JavaScript",
          "jQuery",
          "Google Fonts",
          "Font Awesome",
          "JSON",
          "React",
          "JSX",
          "Node",
          "Express",
          "Sequelize",
          "ESLint",
          "Moment",
          "PDFKit",
          "InvisionApp",
          "moqups.com",
          "W3Schools",
          "Stack Overflow",
          "Type.Fit API",
          "Slow Country Comics",
          "MySQL",
          "Git/Terminal",
          "Visual Studio Code",
          "Zoom",
          "Google Chrome",
          "Slack",
          "GitHub",
          "Heroku",
          "Adobe InDesign",
          "JawsDB",
          "Web Manifest",
          "Service Worker"
        ],
        url: "https://link-n-park.herokuapp.com/",
        GitHub: "https://github.com/joel-clifford-bootcamp/project3"
      }
    ],
    cards: [
      {
        name: "",
        drescription: "",
        technologies: "",
        id: "1",
      },
    ],
    showComponent: false,
    currentCard: ""
  
  };
  
  componentDidMount() {
    this.setState(this.projects);
  }

  handleProjectRender = (event) => {
    event.preventDefault();
    console.log("project button clicked");

    this.setState({ currentCard: event.target.id });
    console.log("this", this);
    console.log("event.target.id", event.target.id)
    console.log("this.id", this.id);

    console.log("this.state", this.state);
    

  };

  renderCard = () => {
    if (this.state.currentCard === "project1") {
      return <CardProject1 />;
    } else if (this.state.currentCard === "project2") {
      return <CardProject2 />;
    }
    else {
      return null;
    }
  };
  
  render(param) {

    return (
      <div backgroundimage={backgroundPic} style={{ backgroundColor: "black" }}>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ backgroundColor: "grey" }}
        >
          <Hero
            backgroundImage={backgroundImage}
            style={{ marginBottom: 150, padding: 150 }}
          >
            <h1 className="display-4">Massimo Guida</h1>
            <h2>Projects</h2>
            <p className="lead">Portfolio</p>
          </Hero>
        </div>
        <Container style={{ marginTop: 50, padding: 50 }}>
          <Row>
            <Col size="col-lg-8 md-12 s-12">
            <h5 className="projectInfo">Click on the buttons to find out more information about each project!</h5>
              <Row size="row-cols-1 row-cols-md-2 pt-4 pb-4">
                  <div className="col mb-6">
                    <div className="card">
                      <img
                        src="../img/project1-ssh.png"
                        className="card-img-top"
                        alt="project1-screen_shot"
                        width="200"
                        height="200"
                      ></img>
                      <div className="card-body justify-content-center">
                        <a
                          className="nav-link"
                          href="#"
                          id="project1link"
                          onClick={this.handleProjectRender}
                        >
                          <h5 className="card-title btn-secondary text-white text-center p-2" id="project1">
                            Project 1
                          </h5>
                          <p className="text-center">ReciPlease: Recipe Search Engine</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="card">
                      <img
                        src="../img/project2-ssh.png"
                        className="card-img-top"
                        alt="project2-screen_shot"
                        width="200"
                        height="200"
                      ></img>
                      <div className="card-body justify-content-center">
                        <a
                          className="nav-link"
                          href="#"
                          id="project2link"
                          onClick={this.handleProjectRender}
                        >
                          <h5 className="card-title btn-secondary text-white text-center p-2" id="project2">
                            Project 2
                          </h5>
                          <p className="text-center">Thankly: Online Gratitude Journal</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="card">
                      <img
                        src="../img/project3-ssh.png"
                        className="card-img-top"
                        alt="project3-screen_shot"
                        width="200"
                        height="200"
                      ></img>
                      <div className="card-body justify-content-center">
                        <a
                          className="nav-link"
                          href="#"
                          id="project3link"
                          onClick={this.handleProjectRender}
                        >
                          <h5 className="card-title btn-secondary text-white text-center p-2" id="project3">
                            Project 3
                          </h5>
                          <p className="text-center">Link-N-Park</p>
                        </a>
                      </div>
                    </div>
                  </div>
              </Row>
              <Row size="row-cols-1 row-cols-md-2 pt-4 pb-4">
                <Col size="md-12 s-12">
                  <div style={{ padding: 50 }}>
                    {this.renderCard()}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;