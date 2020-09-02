import React from "react";
import Button from "../Button";
import "./style.css";
import Headshot from "./image2-copy.jpeg";

function CardBioMusic(props) {
  return (
    <div>
      <div
        className="card bio-text text-center bg-light align-items-center text-secondary"
        style={{ width: "75%", height: "95%" }}
      >
        <div className="card-body">
          <p className="text-secondary">
            Prior to pursuing a career as a full-stack developer, I worked as a
            composer. Below you can hear a sample of my music.
          </p>
          <br />
          <p className="text-secondary">
            To learn more, please feel free to visit my music website at:{" "}
            <a href="www.massimoguida.com" target="_blank">
              www.massimoguida.com
            </a>
          </p>
          <br />
          <p className="text-secondary">
            If you would like to listen to my music, please visit my{" "}
            <a href="https://soundcloud.com/massimo-guida" target="_blank">
              soundcloud
            </a>{" "}
            page.
          </p>
          <br />
          <p className="text-secondary">
            You can also visit my{" "}
            <a
              href="https://www.youtube.com/channel/UCAVkUOnDG7wa_tkNC8YRqnA/featured"
              target="_blank"
            >
              Youtube
            </a>{" "}
            channel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardBioMusic;
