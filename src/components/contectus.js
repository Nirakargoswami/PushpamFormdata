import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle"
import Logo from "../Assets/LOGO2.png"

function Contect() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <Container fluid className="about-section">
      <Particle />
      <Row>
          <Col>
            <img style={{height:"300px",width:"300px"}} src={Logo} />
          </Col >
        </Row>
      <Container>
       
        <Row style={{ justifyContent: "center", padding: "10px" }}>

          <Col

            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              MAHALAXMI  VIVIDHALAXI  VIKAS  ORGANIZATION 
            </h1>
          
          <div>
          Email us on : support@srimahalaxmi.org.in

          </div>

          <div style={{marginBottom:"265px",marginTop:"15px"}}>
            Address -
            15,Vrunda Society, Pathik Bangalow, Ravi Shankar Vidya Mandir, Pune, Maharastra,  411030
          </div>

          </Col>

        </Row>








      </Container>

    </Container>
  );
}

export default Contect;
