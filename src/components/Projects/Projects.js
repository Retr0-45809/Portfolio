import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/gdp.png";
import emotion from "../../Assets/Projects/hostpital.png";
import editor from "../../Assets/Projects/chatapp.png";
import chatify from "../../Assets/Projects/amazon.png";
import suicide from "../../Assets/Projects/autorecon.png";
import bitsOfCode from "../../Assets/Projects/cloud.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Amazon Clone using MEAN Stack"
              description="WeBUY application has several features that are common to e-commerce platforms, such as user registration, product listings, shopping cart management, and order management. The application allows users to create accounts, browse through different product categories, add products to their cart, and complete the checkout process by making payments."
              ghLink="https://github.com/Retr0-45809/WeBUY"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Secure Cloud Storage"
              description="This project is about developing cloud storage using the MERN stack that will encrypt users' files using cryptography to provide security and maintain the confidentiality of user data. Providing double encrytion for files can provide extra security than other storages that are usually open for others to view and access."
              ghLink="https://github.com/Retr0-45809/CrowdCloud"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chat App using RSA encrpytion"
              description="Chat app using RSA encryption and sockets project aims to provide a secure and private chat application that allows users to communicate with each other without the risk of eavesdropping or interception. The chat application allows multiple clients to connect to a server & communicate with each other in a secure way."
              ghLink="https://github.com/Retr0-45809/Chat-app-using-rsa-encryption-and-sockets"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="GDP Prediction Model"
              description="The  project focuses on performing Exploratory Data Analysis (EDA) on the dataset. The purpose of EDA is to explore and understand the dataset before building a prediction model. The project appears to be using data from the World Bank's World Development Indicators (WDI) database."
              ghLink="https://github.com/Retr0-45809/GDP-Prediction-Model"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Reconaissance Tool"
              description="Autorecon aims to provide a useful tool for penetration testers and security researchers to automate the reconnaissance process and identify potential attack vectors and vulnerabilities in a target system or network. The tool  performs various types of scans, such as port scanning, web application scanning, service enumeration, and fingerprinting."
              ghLink="https://github.com/Retr0-45809/autorecon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Hospital Management System"
              description="The Hospital Management System allows hospital administrators and staff to manage various aspects of the hospital, such as patient information, appointment scheduling, billing, and inventory management. The project contains several Java classes that handle different functionalities of the system for managing patient information, scheduling appointments, managing hospital inventory, and generating bills."
              ghLink="https://github.com/Retr0-45809/Hospital-Management-System-Using-Oracle"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
