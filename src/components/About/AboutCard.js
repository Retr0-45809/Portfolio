import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karan Sajeeth </span>
            from <span className="purple"> Pune, India.</span>
            <br />I am a Final Year BTech CS student from MIT Academy of Engineering
            Pune.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Music Production
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching motorsports
            </li>
            <li className="about-activity">
              <ImPointRight /> Video games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't be sorry, be better!"{" "}
          </p>
          <footer className="blockquote-footer">Karan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
