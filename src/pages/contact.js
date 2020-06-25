import React, { Component } from "react";
import Hero from "../components/Hero";
import Table from "../components/Table";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form";
import backgroundImage from "./computer-coding.png";
import backgroundPic from "./background.jpg";
import { render } from "react-dom";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    comment: "",
    error: "",
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    console.log("Component did mount!");
  }

  handleInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submit button clicked");
    // API.getDogsOfBreed(this.state.search)
    //   .then(res => {
    //     if (res.data.status === "error") {
    //       throw new Error(res.data.message);
    //     }
    //     this.setState({ results: res.data.message, error: "" });
    //   })
    //   .catch(err => this.setState({ error: err.message }));
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
            <h2>Contact</h2>
            <p className="lead">Portfolio</p>
          </Hero>
        </div>
        <Container style={{ minHeight: "50%" }}>
          <Row>
            <Col size="md-12" style={{ width: "100%", marginBottom: 10, padding: 10}}>
              <div className="contact-div">
                <div className="text-center padding-2 margin-2">
                  <h3 className="contactHeading">Contact Me</h3>
                </div>
                <div className="card-container">
                  <div
                    className="card text-center padding-2"
                    // style={{ width: "80%" }}
                    id="contactCard"
                  >
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        If you would like to contact me, please submit your
                        full-name, e-mail address, and a message in the form
                        below!
                      </li>
                      <li className="list-group-item">
                        I can also be contacted through E-mail and Phone Number
                        links in the footer at the bottom of each page!
                      </li>
                      <li className="list-group-item">
                        Please note that the form is currently undergoing
                        maintenance!
                      </li>
                    </ul>
                  </div>
                </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-12" style={{ width: "100%" }}>
                <div className="card-container bg-light padding-2 margin-2">
                  <div className="form-container padding-2">
                    <Form
                      handleFormSubmit={this.handleFormSubmit}
                      handleInputChange={this.handleInputChange}
                      name={this.state.name}
                    />
                  </div>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
