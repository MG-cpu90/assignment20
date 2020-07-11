import React, { Component } from "react";
import Hero from "../components/Hero";
import Table from "../components/Table";
import backgroundImage from "./computer-coding.png";
import { render } from "react-dom";
import backgroundPic from "./background.jpg";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import CardAssignment3 from "../components/CardAssignment/CardAssignment3";
import CardAssignment4 from "../components/CardAssignment/CardAssignment4";
import CardAssignment8 from "../components/CardAssignment/CardAssignment8";
import CardAssignment9 from "../components/CardAssignment/CardAssignment9";
import CardAssignment10 from "../components/CardAssignment/CardAssignment10";
import CardAssignment11 from "../components/CardAssignment/CardAssignment11";
import CardAssignment12 from "../components/CardAssignment/CardAssignment12";
import CardAssignment13 from "../components/CardAssignment/CardAssignment13";
import CardAssignment19 from "../components/CardAssignment/CardAssignment19";
import CardAssignment21 from "../components/CardAssignment/CardAssignment21";


class Assignments extends Component {
  state = {
    assignments:  [
      {
        "name": "Assignment #3: Password Generator",
        "description": "A website built using JavaScript that allows users to generate a random secure password based on a number of selected criteria.",
        "technologies": [
          "HTML",
          "CSS",
          "JavaScript",
          "GitHub"
        ],
        "url": "https://mg-cpu90.github.io/passwordgenerator/Develop/",
        "GitHub": "https://github.com/MG-cpu90/passwordgenerator",
        "id": "assignment3",
        "img": "../../img/assignment3-ssh.png"
      },
      {
        "name": "Assignment #4: Coding Quiz",
        "description": "An online quiz made using JavaScript and jQuery that allows users to test their basic general knowledge of coding.",
        "technologies": [
          "HTML",
          "CSS",
          "Bootstrap CSS Framework",
          "JavaScript",
          "jQuery",
          "GitHub"
        ],
        "url": "https://mg-cpu90.github.io/code-quiz/index.html",
        "GitHub": "https://github.com/MG-cpu90/code-quiz",
        "id": "assignment4",
        "img": "../../img/assignment4-ssh.png"
      },
      {
        "name": "Assignment #8: Portfolio",
        "description": "A front-end application containing a portfolio of my assignments and projects.",
        "technologies": [
          "HTML",
          "CSS",
          "Bootstrap CSS Framework",
          "Font Awesome",
          "Google Fonts",
          "GitHub"
        ],
        "url": "https://mg-cpu90.github.io/assignment8/Develop/index.html",
        "GitHub": "https://github.com/MG-cpu90/assignment8",
        "id": "assignment8",
        "img": "../../img/assignment8-ssh.png"
      },
      {
        "name": "Assignment #9: ReadMe Generator",
        "description": "A CLI application that prompts users to respond to some questions and subsequently generates a ReadMe file from a template which includes the information acquired from the users' responses.",
        "technologies": [
          "APIs",
          "JavaScript",
          "jQuery",
          "ES6+",
          "JSON",
          "Git/Terminal",
          "Express",
          "AXIOS",
          "Node.js",
          "Inquirer",
          "fs",
          "GitHub"
        ],
        "url": "#",
        "GitHub": "https://github.com/MG-cpu90/assignment9",
        "id": "assignment9",
        "img": "https://media.giphy.com/media/XZaEKhpR8sVJa4l8yz/giphy.gif"
      },
      {
        "name": "Assignment #10: Template Engine – Employee Summary",
        "description": "A CLI application that allows managers to generate a team html page by prompting them for a series of questions on professional information about themselves and their employees through node.",
        "technologies": [
          "HTML",
          "CSS",
          "BootStrap",
          "Font Awesome",
          "APIs",
          "JavaScript",
          "jQuery",
          "ES6+",
          "JSON",
          "Git/Terminal",
          "Express",
          "AXIOS",
          "Node.js",
          "jest",
          "Inquirer",
          "fs",
          "GitHub"
        ],
        "url": "#",
        "GitHub": "https://github.com/MG-cpu90/assignment10",
        "id": "assignment10",
        "img": "../../img/assignment10-ssh.png"
      },
      {
        "name": "Assignment #11: Note Taker",
        "description": "A full-stack web application that allows users to create and save notes to a json file, or delete them.",
        "technologies": [
          "HTML",
          "CSS",
          "BootStrap",
          "Font Awesome",
          "APIs",
          "JavaScript",
          "jQuery",
          "ES6+",
          "JSON",
          "MySQL",
          "Node.js",
          "Git/Terminal",
          "Express",
          "fs",
          "GitHub",
          "Heroku"
        ],
        "url": "https://floating-cliffs-26268.herokuapp.com/",
        "GitHub": "https://github.com/MG-cpu90/assignment11",
        "id": "assignment11",
        "img": "../../img/assignment11-ssh.png"
      },
      {
        "name": "Assignment #12: Employee Tracker",
        "description": "A CLI application that allows users to organise their business by viewing, adding, or updating departemnts, roles, and employees in a company.",
        "technologies": [
          "APIs",
          "JavaScript",
          "jQuery",
          "ES6+",
          "JSON",
          "MySQL",
          "Node.js",
          "Git/Terminal",
          "Express",
          "Inquirer",
          "fs",
          "GitHub",
          "Heroku"
        ],
        "url": "#",
        "GitHub": "https://github.com/MG-cpu90/assignment12",
        "id": "assignment12",
        "img": "../../img/assignment12-ssh.png"
      },
      {
        "name": "Assignment #13: Eat-Da-Burger!",
        "description": "A restaurant application using node, express, and handlebars, that allows users to add burgers to the menu using a form, and subsequently to 'devour' them using a button, which adds them to the 'Devoured Burgers' list.",
        "technologies": [
          "HTML",
          "CSS",
          "Bootstrap",
          "Font Awesome",
          "JavaScript",
          "jQuery",
          "ES6+",
          "Handlebars",
          "JSON",
          "Express",
          "MySQL",
          "Node.js",
          "Git/Terminal",
          "Zoom",
          "JawsDB",
          "GitHub",
          "Heroku"
        ],
        "url": "https://whispering-sands-43076.herokuapp.com/",
        "GitHub": "https://github.com/MG-cpu90/assignment13",
        "id": "assignment13",
        "img": "../../img/assignment13-ssh.png"
      },
      {
        "name": "Assignment #19: Employee Directory",
        "description": "A front-end application built using react, that allows users to sort columns of a table of employees, and to filter employees by their name.",
        "technologies": [
          "HTML",
          "CSS",
          "Bootstrap",
          "Font Awesome",
          "JSX",
          "React",
          "JSON",
          "Web Manifest",
          "Service Worker",
          "Tinify",
          "Visual Studio Code",
          "Google Chrome",
          "Node.js",
          "Git/Terminal",
          "JawsDB",
          "GitHub",
          "Netlify"
        ],
        "url": "https://happy-aryabhata-281606.netlify.app/",
        "GitHub": "https://github.com/MG-cpu90/assignment19",
        "id": "assignment19",
        "img": "../../img/assignment19-ssh.png"
      },
      {
        "name": "Assignment #21: React Google Books Search",
        "description": "A MERN application that allows users to search for books through google and add them to or remove them from a reading list.",
        "technologies": [
          "HTML",
          "CSS",
          "Bootstrap",
          "Font Awesome",
          "JSX",
          "React",
          "JSON",
          "Web Manifest",
          "Service Worker",
          "Visual Studio Code",
          "Google Chrome",
          "Node.js",
          "Git/Terminal",
          "MongoDB",
          "GitHub",
          "Heroku"
        ],
        "url": "https://reactgoogle-booksearch.herokuapp.com/",
        "GitHub": "https://github.com/MG-cpu90/assignment21",
        "id": "assignment21",
        "img": "../../img/assignment21-ssh.png"
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
    currentCard: "",
  };

  componentDidMount() {
    this.setState(this.projects);
  }

  handleAssignmentRender = (event) => {
    event.preventDefault();
    console.log("project button clicked");

    this.setState({ currentCard: event.target.id });
    console.log("this", this);
    console.log("event.target.id", event.target.id);
    console.log("this.id", this.id);

    console.log("this.state", this.state);
  };

  renderCard = () => {
    if (this.state.currentCard === "assignment3") {
      return <CardAssignment3 />;
    } else if (this.state.currentCard === "assignment4") {
      return <CardAssignment4 />;
    } else if (this.state.currentCard === "assignment8") {
      return <CardAssignment8 />;
    } else if (this.state.currentCard === "assignment9") {
      return <CardAssignment9 />;
    } else if (this.state.currentCard === "assignment10") {
      return <CardAssignment10 />;
    } else if (this.state.currentCard === "assignment11") {
      return <CardAssignment11 />;
    } else if (this.state.currentCard === "assignment12") {
      return <CardAssignment12 />;
    } else if (this.state.currentCard === "assignment13") {
      return <CardAssignment13 />;
    } else if (this.state.currentCard === "assignment19") {
      return <CardAssignment19 />;
    } else if (this.state.currentCard === "assignment21") {
      return <CardAssignment21 />;
    } else {
      return null;
    }
  };

  render() {
    return (
      <div backgroundImage={backgroundPic} style={{ backgroundColor: "black" }}>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ backgroundColor: "grey" }}
        >
          <Hero
            backgroundImage={backgroundImage}
            style={{ marginBottom: 150, padding: 150 }}
          >
            <h1 className="display-4">Massimo Guida</h1>
            <h2>Assignments</h2>
            <p className="lead">Portfolio</p>
          </Hero>
        </div>
        <Container style={{ marginTop: 50, padding: 50 }}>
          <Row>
            <Col size="col-lg-8 md-12 s-12">
              <h5 className="assignmentInfo">Click on the buttons to find out more information about each assignment!</h5>
              <Row size="row-cols-1 row-cols-md-2 pt-4 pb-4">
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="../img/assignment3-ssh.png"
                      className="card-img-top"
                      alt="assignment1-screen_shot"
                      width="200"
                      height="200"
                    ></img>
                    <div className="card-body justify-content-center">
                      <a
                        className="nav-link"
                        href="#"
                        onClick={this.handleAssignmentRender}
                      >
                        <h5
                          className="card-title btn-secondary text-white text-center p-2"
                          id="assignment3"
                        >
                          Assignment 3
                        </h5>
                      </a>
                      <p className="text-center">
                        JavaScript Password Generator
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="../img/assignment4-ssh.png"
                      className="card-img-top"
                      alt="assignment4-screen_shot"
                      width="200"
                      height="200"
                    ></img>
                    <div className="card-body justify-content-center">
                      <a
                        className="nav-link"
                        href="#"
                        onClick={this.handleAssignmentRender}
                      >
                        <h5
                          className="card-title btn-secondary text-white text-center p-2"
                          id="assignment4"
                        >
                          Assignment 4
                        </h5>
                      </a>
                      <p className="text-center">jQuery Coding Quiz</p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      // src="./assignment8-ssh.png"
                      src="../img/assignment8-ssh.png"
                      className="card-img-top"
                      alt="assignment8-screen_shot"
                      width="200"
                      height="200"
                    ></img>
                    <div className="card-body justify-content-center">
                      <a
                        className="nav-link"
                        href="#"
                        onClick={this.handleAssignmentRender}
                      >
                        <h5
                          className="card-title btn-secondary text-white text-center p-2"
                          id="assignment8"
                        >
                          Assignment 8
                        </h5>
                      </a>
                      <p className="text-center">Portfolio</p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="https://media.giphy.com/media/XZaEKhpR8sVJa4l8yz/giphy.gif"
                      className="card-img-top"
                      alt="assignment9-screen_shot"
                      width="200"
                      height="200"
                    ></img>
                    <div className="card-body justify-content-center">
                      <a
                        className="nav-link"
                        href="#"
                        onClick={this.handleAssignmentRender}
                      >
                        <h5
                          className="card-title btn-secondary text-white text-center p-2"
                          id="assignment9"
                        >
                          Assignment 9
                        </h5>
                      </a>
                      <p className="text-center">ReadMe Generator</p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="../img/assignment10-ssh.png"
                      className="card-img-top"
                      alt="assignment10-screen_shot"
                      width="200"
                      height="200"
                    ></img>
                    <div className="card-body justify-content-center">
                      <a
                        className="nav-link"
                        href="#"
                        onClick={this.handleAssignmentRender}
                      >
                        <h5
                          className="card-title btn-secondary text-white text-center p-2"
                          id="assignment10"
                        >
                          Assignment 10
                        </h5>
                      </a>
                      <p className="text-center">
                        Template Engine – Employee Summary
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="../img/assignment11-ssh.png"
                      className="card-img-top"
                      alt="assignment11-screen_shot"
                      width="200"
                      height="200"
                    ></img>
                    <div className="card-body justify-content-center">
                      <a
                        className="nav-link"
                        href="#"
                        onClick={this.handleAssignmentRender}
                      >
                        <h5
                          className="card-title btn-secondary text-white text-center p-2"
                          id="assignment11"
                        >
                          Assignment 11
                        </h5>
                      </a>
                      <p className="text-center">Note Taker</p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="../img/assignment12-ssh.png"
                      className="card-img-top"
                      alt="assignment12-screen_shot"
                      width="200"
                      height="200"
                    ></img>
                    <div className="card-body justify-content-center">
                      <a
                        className="nav-link"
                        href="#"
                        onClick={this.handleAssignmentRender}
                      >
                        <h5
                          className="card-title btn-secondary text-white text-center p-2"
                          id="assignment12"
                        >
                          Assignment 12
                        </h5>
                      </a>
                      <p className="text-center">Employee Tracker</p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="../img/assignment13-ssh.png"
                      className="card-img-top"
                      alt="assignment13-screen_shot"
                      width="200"
                      height="200"
                    ></img>
                    <div className="card-body justify-content-center">
                      <a
                        className="nav-link"
                        href="#"
                        onClick={this.handleAssignmentRender}
                      >
                        <h5
                          className="card-title btn-secondary text-white text-center p-2"
                          id="assignment13"
                        >
                          Assignment 13
                        </h5>
                      </a>
                      <p className="text-center">Eat-Da-Burger!</p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="../img/assignment19-ssh.png"
                      className="card-img-top"
                      alt="assignment19-screen_shot"
                      width="200"
                      height="200"
                    ></img>
                    <div className="card-body justify-content-center">
                      <a
                        className="nav-link"
                        href="#"
                        onClick={this.handleAssignmentRender}
                      >
                        <h5
                          className="card-title btn-secondary text-white text-center p-2"
                          id="assignment19"
                        >
                          Assignment 19
                        </h5>
                      </a>
                      <p className="text-center">Employee Directory</p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                    <img
                      src="../img/assignment21-ssh.png"
                      // src="./assignment21-ssh.png"
                      className="card-img-top"
                      alt="assignment21-screen_shot"
                      width="200"
                      height="200"
                    ></img>
                    <div className="card-body justify-content-center">
                      <a
                        className="nav-link"
                        href="#"
                        onClick={this.handleAssignmentRender}
                      >
                        <h5
                          className="card-title btn-secondary text-white text-center p-2"
                          id="assignment21"
                        >
                          Assignment 21
                        </h5>
                      </a>
                      <p className="text-center">React Google Books Search</p>
                    </div>
                  </div>
                </div>
              </Row>
              <Row size="row-cols-1 row-cols-md-2 pt-4 pb-4">
                <Col size="md-12 s-12">
                  <div style={{ marginTop: 50, padding: 50 }}>
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

export default Assignments;
