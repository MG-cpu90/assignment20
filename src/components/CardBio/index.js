import React from "react";
import Button from "../Button";
// import Image from 'react-bootstrap/Image'
import "./style.css";
// import Card from 'react-bootstrap/Card'
import Headshot from "./image2-copy.jpeg"

function CardBio(props) {
  console.log(props.image);
  console.log(Headshot);
  return (
      <div
        className="card bg-light m-6 sm-12 text-center aboutCard"
        // style={{max-width: 20rem, min-width: 18 rem}}
        style={{width: 300}}
      >
        <img src={Headshot} className="card-img-top" alt="Head-shot" width="200" height="225" id="headShot" />
          <div className="card-body m-12 sm-12">
            <ul className="text-left">
              <li>
                <i className="fas fa-id-card"></i> Massimo Guida
              </li>
              <li>
                <i
                  className="fas fa-map-marker-alt"
                  // style="font-size:16px, float: left, line-height: 150%"
                ></i>
                Toronto, Ontario
              </li>
              <p id="photo-link">
                Photo credit:{" "}
                <a
                  href="http://www.bohuang.ca/"
                  target="_blank"
                  id="photo-credit"
                >
                  Bo Huang Photography
                </a>
              </p>
            </ul>
          </div>
        </div>
  );
}

export default CardBio;
