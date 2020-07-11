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
      {assignments[9].technologies.map(item => (
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

function CardAssignment21(props) {

  return (
    <div
      className="card bg-light m-6 sm-12 text-center renderCard"
      style={{ width: "30rem", height: "30rem" }}
    >
      <img
        src={assignments[9].img}
        className="card-img-top"
        alt={assignments[9].id}
        width="650"
        height="200"
        id={assignments[9].id}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{assignments[9].name}</h5>
        <p className="card-text">{assignments[9].description}</p>
      </div>
      <div className="card-body">
        <Example />
      </div>
      <div className="card-body">
        <a href={assignments[9].url} target="_blank">
          Deployed URL Link
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href={assignments[9].GitHub} target="_blank">
          GitHub Repository Link
        </a>
      </div>
    </div>
  );
}

export default CardAssignment21;