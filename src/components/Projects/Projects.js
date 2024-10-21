import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import logo from "../../Assets/LOGO2.png"

import { useState } from "react";
import { Formdetali } from "../../Constant/constan"
function Projects() {
  const [shwo, setShow] = useState(false)
  return (
    <Container fluid className="project-section">
      <Particle />
      <Row>
          <Col>
            <img style={{height:"300px",width:"300px"}} src={logo} />
          </Col >
        </Row>
      <Container>
        <h1 className="project-heading">
          Ongoing  <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center"}}>

          {Object.keys(Formdetali).map((x) => {
            const object = Formdetali[x]
            return (

              <Col md={4} className="project-card">
                <ProjectCard
                  shwo={shwo}
                  setShow={setShow}
                  imgPath={object.imge}
                  isBlog={true}
                  pdf={object.pdf}
                  title={object.Title}
                  description={object.detailtext}

                />
              </Col>





            )
          })}



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
