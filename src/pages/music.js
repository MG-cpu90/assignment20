import React, { Component } from "react";
import Hero from "../components/Hero";
import Table from "../components/Table";
import backgroundImage from "./computer-coding.png";
import backgroundPic from "./background.jpg";
import { render } from "react-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import CardBio from "../components/CardBio";
import CardBio2 from "../components/CardBio2";
import CardBioMusic from "../components/CardBioMusic";
import BioContainer from "../components/BioContainer";
import "./style.css";

import Button from "../components/Button";

function Music() {
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
          <h2>Portfolio</h2>
          <p className="lead">Home</p>
        </Hero>
      </div>
      <Container style={{ marginTop: 50, padding: 50 }}>
        <Row>
          <Col size="md-12 s-12">
            <h3>Music</h3>
            {/* <CardBio
              className="bg-light"
              style={{ width: "20px", marginTop: 50, padding: 50 }}
            ></CardBio> */}
          </Col>
        </Row>
        <Row>
          <Col size="md-12 s-12">
            <CardBioMusic className="bg-light"></CardBioMusic>
          </Col>
        </Row>
        <Row>
          <Col size="md-12" style={{ width: "100%" }}>
            <div>
              <div className="row padding-30 margin-30 youtube-container">
                <div className="col m-6 sm-12 padding-2 margin-2 bio-text text-center">
                  <iframe
                    className="embed-responsive embed-responsive-4by3"
                    width="360"
                    height="515"
                    src="https://www.youtube.com/embed/JZVsnecX-xo"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12" style={{ width: "100%" }}>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Music;
