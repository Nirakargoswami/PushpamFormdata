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
            </Col >
            <h2 style={{ color: "black", textAlign: "center" }}>
              Empowering women and Skill of men is the cornerstone of building resilient families, cohesive communities, and thriving nations
            </h2>


          </Row>

        </Container>

      </Container>
      {/* <Home2 /> */}
      {/* <Form /> */}

      <Paynow />
      <div className="cardbox banner">
        {Object.keys(Formdetali).map((x) => {
          const object = Formdetali[x]
          return (
            <div class="card banner" style={{ width: "18rem" }}>

              <div class="card-body">
                {object.imge && <img src={object.imge} class="card-img-top" alt="..." />
                }                <h5 class="card-title">{object.Title}</h5>
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
