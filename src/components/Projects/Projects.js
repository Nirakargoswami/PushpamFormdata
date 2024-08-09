import React  from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import pad from "../../Assets/pad.png";
import YuvaRojgar from "../../Assets/PDFG.pdf"
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { useState } from "react";
function Projects() {
const [shwo ,setShow] = useState(false)

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Ongoing  <strong className="purple">Projects </strong>
        </h1>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              shwo={shwo}
              setShow={setShow}
              imgPath={pad}
              isBlog={true}
              pdf={YuvaRojgar}
              title="Sanatary pad kit"
              description="મહિલા હેલ્થ અવેરનેસ પ્રોજેકટ ઘણી મહિલાઓને શિક્ષણ ન હોવાથી માસિક દરમિયાન અલગ અલગ કપડાઓ વાપરતી હોય છે , કપડાઓની નિયમિત સફાઈ ન થવાથી બેક્ટરીયા ઉત્પન થાય છે અને ગુપ્ત રોગ થવાના ચાન્સ વધી જાય છે ,આવું ન થાય તે માટે મહિલાઓને જાગૃત કરીને સેનેટરી પેડ આપવા"
             
            />
          </Col>

    

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
