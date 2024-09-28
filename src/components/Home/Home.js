import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Button from "react-bootstrap/Button";
import Paynow from "../Paypayment/Pay"
import Nav from "react-bootstrap/Nav";
import Type from "./Type";
import Form from "../Form/form"
import { Link } from "react-router-dom";
import Pdfgenraort from "../Pdfgenarot/Pdfgenator"
import Fade from "../Corousl"
import { Formdetali } from "../../Constant/constan"
import Imagegallry from "../Imagegalery/galaeyr"
import Bikerepair from "../../Assets/Beauty.jpg"



function Home() {

  const Print = () => {
    console.log("click")
  }
  return (
    <section>
      <Container fluid className="home-section" id="home">


        <Container className="home-content">

          <Fade />
          <Row>
            <Col className="home-header">

              {/* 
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SOUMYAJIT BEHERA</strong>
              </h1> */}

              {/* <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div> */}
              <h1 style={{ textAlign: "center", color: "#623686", marginTop: "10px", marginBottom: "10px", fontWeight: "700" }} >MAHALAXMI VIVIDHALAXI VIKAS ORGANIZATION</h1>

            </Col >

            <h4 style={{ color: "black", textAlign: "center",marginTop: "20px", fontWeight: "500" }}>
              Empowering women and Skill of men is the cornerstone of building resilient families, cohesive communities, and thriving nations
            </h4>
          </Row>

        </Container>

      </Container>
      {/* <Home2 /> */}
      {/* <Form /> */}
     
      {/* <Paynow /> */}
      <div className="porjTitle">
        <h2 style={{ color: "#623686", textAlign: "center", fontWeight: "500" }}>
          Projects Galarry
        </h2>
      </div>
      <div style={{marginBottom:"40px"}}>
        <Imagegallry />
      </div>
      <div className="porjTitle">
        <h2 style={{ color: "#623686", textAlign:  "center", fontWeight: "500" }}>
          Projects 
        </h2>
      </div>
      <div className="cardbox banner">
        <div class="card banner" style={{ width: "18rem" }}>
          <div className="Bludrbox">
            લક્ષ્યાંક પૂરો થઈ ગયેલ હોવાથી અરજી કરી શકાશે નહિ.          </div>
          <div style={{ opacity: "0.7" }} class="card-body">
            <img src={Bikerepair} class="card-img-top" alt="..." />
            <h5 class="card-title">Motar revainding and light fetting</h5>
            <p class="card-text">"ધણા યુવાનો જોડે સ્કિલ છે પણ ધંધો શરૂ કરવા માટે સાધનો હોતા નથી , આવા યુવાનો ને સાધનો પૂરા પાડવા જેથી પોતાનો રોજગાર મેળવી શકે . ધણા યુવાનો જોડે સ્કિલ છે એવાં યુવાનો  પ્રાઈવેટ જોબ કરવા માગે છે પણ સર્ટિફિકેટ ના હોવાના કારણે જોબ કરી શકતા નથી તો આવા યુવનાઓને સર્ટિફિકેટ અને સાધનોની  કીટ આપવી."</p>

            <a class="btn btn-primary" style={{}}> Apply Now</a>


          </div>
        </div>


        {Object.keys(Formdetali).map((x) => {
          const object = Formdetali[x]
          return (
            <div class="card banner" style={{ width: "18rem" }}>

              <div class="card-body">
                {object.imge && <img src={object.imge} class="card-img-top" alt="..." />
                }                <h2 class="card-title">{object.Title}</h2>
                <p class="card-text">{object.detailtext}</p>
                <Nav.Link
                  as={Link}
                  to={{
                    pathname: "/Form",
                    search: `?data=${x}`,
                  }}
                  style={{ padding: "0px" }}
                // onClick={() => updateExpanded(false)}
                >
                  <a class="btn btn-primary" style={{}}> Apply Now</a>
                </Nav.Link>

              </div>
            </div>
          )
        })

        }

      </div>
      <div>

      </div>

      <div>



      </div>


    </section>
  );
}

export default Home;
