import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Button from "react-bootstrap/Button";

import Nav from "react-bootstrap/Nav";
import Type from "./Type";
import Form from "../Form/form"
import { Link } from "react-router-dom";

import Pdfgenraort from  "../Pdfgenarot/Pdfgenator"
import Fade from "../Corousl"
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
            </Col>
            <button onClick={Print}>
              asdfasdfa
            </button>


          </Row>

        </Container>

      </Container>
      {/* <Home2 /> */}
      {/* <Form /> */}
      <div className="cardbox banner">
        <div class="card banner" style={{width: "18rem"}}>
          <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Nav.Link
                as={Link}
                to={{
                  pathname: "/Form",
                  search: "?data=2",
                }}
               style={{padding:"0px"}}
                // onClick={() => updateExpanded(false)}
              >
              
              
                <a  class="btn btn-primary" style={{}}>  Fill the form</a>
              </Nav.Link>
            
            </div>
        </div>
        <div>
        <div class="card banner" style={{width: "18rem"}}>
          <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Apply Now</a>
            </div>
        </div>
      </div>
      <div>
        <div class="card banner" style={{width: "18rem"}}>
          <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
      </div>
      
    </section>
  );
}

export default Home;
