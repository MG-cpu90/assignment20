import React from "react";
import Button from "../Button";
import "./style.css";
import projects from "../../projects.json";
import screenshot from "../../img/project2-ssh.png";
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const popover = (
  <Popover id="popover-basic">
    <Popover.Content>
    <ul className="list-group">
      {projects[1].technologies.map(item => (
        <li className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
    </Popover.Content>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="top" overlay={popover}>
    <button className="btn btn-secondary" type="button">Accessories and Technologies Used</button>
  </OverlayTrigger>
);

function CardProjec2(props) {

  return (
    <div
      className="card bg-light m-6 sm-12 text-center renderCard"
      style={{ width: "30rem", height: "30rem" }}
    >
      <img
        src={projects[1].img}
        className="card-img-top"
        alt={projects[1].id}
        width="650"
        height="200"
        id={projects[1].id}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{projects[1].name}</h5>
        <p className="card-text">{projects[1].description}</p>
      </div>
      <div className="card-body">
        <Example />
      </div>
      <div className="card-body">
        <a href={projects[1].url} target="_blank">
          Deployed URL Link
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href={projects[1].GitHub} target="_blank">
          GitHub Repository Link
        </a>
      </div>
    </div>
  );
}

export default CardProjec2;