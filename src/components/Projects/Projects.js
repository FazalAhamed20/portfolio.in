import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/netflix.png";
import redux from "../../Assets/Projects/redux.png";
import solveX from "../../Assets/Projects/solveX.png";
import olx from "../../Assets/Projects/olx.png";
import coffeeland from "../../Assets/Projects/coffeeland.png";

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
              imgPath={solveX}
              isBlog={false}
              title="SolveX"
              description="A coding platform where users can use their creative mind and code and as a beginner they also start learing from practice and its a open source project problems can be contributed by contributors"
              ghLink="https://github.com/FazalAhamed20/SolveX-frontend.in"
              demoLink="https://solve-x-frontend-in.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coffeeland}
              isBlog={false}
              title="Coffee Land"
              description="Its an Ecommerce website where users can buy products return delivery everything as industrial standard basically its for coffee inspired from starbucks"
              ghLink="https://github.com/FazalAhamed20/Coffeeland.in"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redux}
              isBlog={false}
              title="User Management"
              description="User Management system using redux and react and backend is node where user can signin or signup can change their details like name,profileimage,etc.."
              ghLink="https://github.com/FazalAhamed20/Redux.in"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Neflix"
              description="Its a netflix clone used react and firebase on it at my initial stage of learning react i done this mini project for learning purpose and for data storage i used firestore"
              ghLink="https://github.com/FazalAhamed20/Netflix.in"
              demoLink="https://netflix-in-puce.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olx}
              isBlog={false}
              title="olx"
              description="Olx cloning mini project where i built this project at the initial stage when i used to learn react and firebase for  image storage i used firestore as well"
              ghLink="https://github.com/FazalAhamed20/olx.in"
              demoLink="https://olx-in-nu.vercel.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
