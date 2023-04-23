import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiKalilinux,
  SiVisualstudiocode,
  SiReact,
  SiAngular,
  SiNotepadplusplus,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotepadplusplus />
      </Col>
    </Row>
  );
}

export default Toolstack;
