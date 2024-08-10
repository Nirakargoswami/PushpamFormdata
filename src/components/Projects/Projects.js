import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import pad from "../../Assets/pad.png";
import YuvaRojgar from "../../Assets/Bike.pdf"
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { useState } from "react";
import { Formdetali } from "../../Constant/constan"
function Projects() {
  const [shwo, setShow] = useState(false)
  return (
    <Container fluid className="project-section">
      <Particle />
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
