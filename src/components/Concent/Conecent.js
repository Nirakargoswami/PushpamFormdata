import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import ABoutpdf from "../../Assets/REPORT.pdf"
import logo from "../../Assets/LOGO2.png"

import { Document, Page } from 'react-pdf';

function Concet() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
            <Row>
          <Col>
            <img style={{height:"300px",width:"300px"}} src={logo} />
          </Col >
        </Row>
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
                        Consent:-

                        I solemnly declare that the details given above are correct to the best of my knowledge and if any details are found to be incorrect, it will be at the discretion of the institution. I have read and understood all the rules in the advertisement and filled this application form.


                    </Col>


                    <Row className="resume">


                    </Row>
                    <div>
                        Email us on : support@srimahalaxmi.org.in

                    </div>

                    <div>
                        Address -
                        15,Vrunda Society, Pathik Bangalow, Ravi Shankar Vidya Mandir, Pune, Maharastra,  411030
                    </div>



                </Row>








            </Container>

        </Container>
    );
}

export default Concet;
