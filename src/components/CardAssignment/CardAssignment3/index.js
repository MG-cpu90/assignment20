import React from "react";
import Button from "../../Button";
import "./style.css";
import assignments from "../../../assignments.json";
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const popover = (
  <Popover id="popover-basic">
    <Popover.Content>
    <ul className="list-group">
      {assignments[0].technologies.map(item => (
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

function CardAssignment3(props) {

  return (
    <div
      className="card bg-light m-6 sm-12 text-center renderCard"
      style={{ width: "30rem", height: "30rem" }}
    >
      <img
        src={assignments[0].img}
        className="card-img-top"
        alt={assignments[0].id}
        width="650"
        height="200"
        id={assignments[0].id}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{assignments[0].name}</h5>
        <p className="card-text">{assignments[0].description}</p>
      </div>
      <div className="card-body">
        <Example />
      </div>
      <div className="card-body">
        <a href={assignments[0].url} target="_blank">
          Deployed URL Link
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href={assignments[0].GitHub} target="_blank">
          GitHub Repository Link
        </a>
      </div>
    </div>
  );
}

export default CardAssignment3;