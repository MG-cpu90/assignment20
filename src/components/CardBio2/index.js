import React from "react";
import Button from "../Button";
import "./style.css";
import Headshot from "./image2-copy.jpeg";

function CardBio2(props) {
  return (
    <div>
      <div
        className="card bio-text text-center bg-light align-items-center text-secondary"
        style={{ width: "75%", height: "95%" }}
      >
        <div className="card-body">
          My name is Massimo Guida, and I am a Full-Stack Developer who is
          interested in Front-End Design. I am originally from Italy, but I am
          currently based in Toronto, Canada. In addition to being fluent in
          both English and Italian, I have a knowledge of multiple romance
          languages, and an extensive musical background as a composer, music
          theorist, copyist, and educator. I earned a Doctorate, a Master's, and
          a BMus. (Hons) degree in Composition from the University of Toronto,
          as well as a minor degree in Spanish, a Conversational Language
          Certificate in French from the School of Continuing Studies, and I am
          currently completing a Coding Bootcamp through the latter institution.
          I have acquired newly developed skills with HTML, CSS, Bootstrap,
          JavaScript, jQuery, Ajax, JSON, APIs, Node, Git, Express, ES6+, SQL,
          Handlebars, Mongo, NoSQL, PWAs, JSX, and React, and I enjoy exploring
          new ways to refine my code. My aim is to combine my passion for music,
          front-end design and coding by developing professional looking
          websites for other musicians. As a hard-working, organised, and
          detail-oriented high achiever, I have obtained several scholarships
          and awards for my compositions, teaching, research, and academic
          performance. Due to the multitude of compositional and research
          collaborations in which I have taken part, I am able to work well and
          diligently both individually and as part of a team, and I am also an
          excellent writer and communicator.
        </div>
        <div className="card-body">
          Please feel free to contact me at:{" "}
          <a href="mailto:massimo@massimoguida.com" target="_blank">
            massimo@massimoguida.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardBio2;
