import React, { Component } from "react";
import logo from "./logo.svg";
import backgroundPic from './computer-coding.png';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Assignments from "./pages/assignments";
import Projects from "./pages/projects";
import Hero from "./components/Table";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    assignments: [
      {
        name: "Assignment #3: Password Generator",
        description: "A website built using JavaScript that allows users to generate a random secure password based on a number of selected criteria.",
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "GitHub"
        ],
        url: "https://mg-cpu90.github.io/passwordgenerator/Develop/",
        GitHub: "https://github.com/MG-cpu90/passwordgenerator"
      },
      {
        name: "Assignment #4: Coding Quiz",
        description: "An online quiz made using JavaScript and jQuery that allows users to test their basic general knowledge of coding.",
        technologies: [
          "HTML",
          "CSS",
          "Bootstrap CSS Framework",
          "JavaScript",
          "jQuery",
          "GitHub"
        ],
        url: "https://mg-cpu90.github.io/code-quiz/index.html",
        GitHub: "https://github.com/MG-cpu90/code-quiz"
      },
      {
        name: "Assignment #9: ReadMe Generator",
        description: "A CLI application that prompts users to respond to some questions and subsequently generates a ReadMe file from a template which includes the information acquired from the users' responses.",
        technologies: [
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
        url: "",
        GitHub: "https://github.com/MG-cpu90/assignment9"
      },
      {
        name: "Assignment #10: Template Engine – Employee Summary",
        description: "A CLI application that allows managers to generate a team html page by prompting them for a series of questions on professional information about themselves and their employees through node.",
        technologies: [
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
        url: "",
        GitHub: "https://github.com/MG-cpu90/assignment10"
      },
      {
        name: "Assignment #11: Note Taker",
        description: "A full-stack web application that allows users to create and save notes to a json file, or delete them.",
        technologies: [
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
        url: "https://floating-cliffs-26268.herokuapp.com/",
        GitHub: "https://github.com/MG-cpu90/assignment11"
      },
      {
        name: "Assignment #12: Employee Tracker",
        description: "A CLI application that allows users to organise their business by viewing, adding, or updating departemnts, roles, and employees in a company.",
        technologies: [
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
        url: "",
        GitHub: "https://github.com/MG-cpu90/assignment12"
      },
      {
        name: "Assignment #13: Eat-Da-Burger!",
        description: 'A restaurant application using node, express, and handlebars, that allows users to add burgers to the menu using a form, and subsequently to "devour" them using a button, which adds them to the "Devoured Burgers" list.',
        technologies: [
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
        url: "https://whispering-sands-43076.herokuapp.com/",
        GitHub: "https://github.com/MG-cpu90/assignment13"
      },
      {
        name: "Assignment #19: Employee Directory",
        description: 'A front-end application built using react, that allows users to sort columns of a table of employees, and to filter employees by their name.',
        technologies: [
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
        url: "https://happy-aryabhata-281606.netlify.app/",
        GitHub: "https://github.com/MG-cpu90/assignment19"
      }
    ],
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
      }
    ]
  };

render() {
  return (
    <Router>
      <div style={{backgroundColor: "#383737"}}>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/assignments" component={Assignments} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
}

export default App;
