import React from "react";
import PDF from "./M.Guida-Resume-full-stack.pdf"
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="nav justify-content-center">
        <li className="nav-item p-20 m-20">
          <i className="fab fa-github icon"></i>{" "}
          <a href="http://www.github.com/MG-cpu90" target="_blank">
            GitHub
          </a>
        </li>
        <li className="nav-item">
          <i className="fab fa-linkedin icon"></i>{" "}
          <a
            href="https://www.linkedin.com/in/massimo-guida-d-m-a-he-him-his-23b13a30/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li className="nav-item">
          <i className="fab fa-stack-overflow icon"></i>{" "}
          <a
            href="https://stackoverflow.com/users/12438851/mguida90"
            target="_blank"
          >
            Stack Overflow
          </a>
        </li>
        <li className="nav-item">
          <i className="fas fa-link icon"></i>{" "}
          <a href="http://www.massimoguida.com" target="_blank">
            Personal Website
          </a>
        </li>
        <li className="nav-item">
          <i className="fab fa-soundcloud icon"></i>{" "}
          <a href="https://soundcloud.com/massimo-guida" target="_blank">
            Soundcloud
          </a>
        </li>
        <li className="nav-item">
          <i className="fab fa-youtube icon"></i>{" "}
          <a
            href="https://www.youtube.com/channel/UCAVkUOnDG7wa_tkNC8YRqnA/featured"
            target="_blank"
          >
            Youtube
          </a>
        </li>
        <li className="nav-item">
          <i className="fa fa-envelope-o icon"></i>{" "}
          <a href="mailto:massimo@massimoguida.com" target="_blank">
            E-mail
          </a>
        </li>
        <li className="nav-item">
          <i className="fas fa-file icon"></i>{" "}
          <a href={PDF} target="_blank">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <i className="fas fa-mobile-alt icon"></i>{" "}
          <a class="mobilesOnly" href="tel:6478084073" target="_blank">
            Phone number
          </a>
        </li>
        <li className="nav-iterm copyright">
          <span className="spanFooter justify-content-center">© Copyright Massimo Guida, 2020</span>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
