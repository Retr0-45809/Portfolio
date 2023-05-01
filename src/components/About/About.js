import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { ImPointRight } from "react-icons/im";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I AM</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Education
        </h1>
        <br></br>
        <p>
          <font size="4">
          <ul>
            <li className="about-activity">
              <ImPointRight style={{ verticalAlign: "middle" }} />
              &nbsp;&nbsp; Degree : BTech in Computer Science
              <br />
              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; College : MIT Academy of Engineering<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Year : 2019 - 2023<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CGPA = 8.48
              </span>
            </li>
            <br></br>
            <li className="about-activity">
              <ImPointRight style={{ verticalAlign: "middle" }} />
              &nbsp;&nbsp; Degree : 12th HSC in Science
              <br />
              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; College : Kamalnayan Bajaj Junior College<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Year : 2017 - 2019<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Percentage = 71%
              </span>
            </li>
            <br></br>
            <li className="about-activity">
              <ImPointRight style={{ verticalAlign: "middle" }} />
              &nbsp;&nbsp; Degree : 10th SSC
              <br />
              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; School : Kamalnayan Bajaj High School<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Year : 2005 - 2017<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Percentage = 92%
              </span>
            </li>
          </ul>
          </font>
        </p>
        <br></br>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
