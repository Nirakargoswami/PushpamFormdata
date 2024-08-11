import React, { useEffect ,useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import ABoutpdf from "../../Assets/REPORT.pdf"
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { Document, Page } from 'react-pdf';

function About() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <Container fluid className="about-section">
      <Particle />
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
              MAHALAXMI  VIVIDHALAXI  VIKAS  ORGANIZATION એક NON GOVE.ORG. છે . તે છેલ્લા સાત વર્ષથી કામ છે તે શિક્ષણ , આરોગ્ય , ઓર્ગેનિક ખેતી , બાળ વિકાસ , સ્કિલ ડેવલોપમેન્ટ , રોજગારી , જીવન જરૂરિયાત પાયાની વસ્તુઓ , જરુરીયાત મંદ લોકોને સહાય  જેવા અનેક પ્રોજેકટ પર કામ કરે છે .
            </h1>
            ઉદ્દેશ :-
            <h3 className="project-heading">
              1.	ગામડાના લોકોને રોજગારી  મળી રહે .
            </h3>
            <h3 className="project-heading">
              2.	જરુરીયાત મંદ બાળકોને સારું શિક્ષણ મળે તે માટે અભ્યાસ ની વસ્તુ પૂરી પાડવી              </h3>
            <h3 className="project-heading">
              3.	બાળકોને પૌષ્ટિક આહાર મળે .
            </h3>
            <h3 className="project-heading">
              5.	ગામડાના લોકોને ગામમાં આરોગ્યની સુવિધા મળી રહે .
            </h3>
            <h3 className="project-heading">
              6.	ઘર વપરાશ ની ચીજ વસ્તુઓ લોકોને મળી રહે.                  </h3>




          </Col>

          <Row className="resume">

            
            <Document file={ABoutpdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
          </Row>



        </Row>








      </Container>

    </Container>
  );
}

export default About;
