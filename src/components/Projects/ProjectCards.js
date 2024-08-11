import React ,{useEffect}from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
import { Document, Page } from 'react-pdf';
import { useState } from "react"
import DownloadButton from "./Doanload"
import Row from "react-bootstrap/Row"
function ProjectCards(props) {
  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);
  return (
    <div className="pdfbox">


      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

            <DownloadButton pdf={props.pdf} />
      
          <Button onClick={() => handleShow()} variant="primary" href={props.ghLink} target="_blank">

            {props.isBlog ? "Projects details" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"View"}
            </Button>
          )}
        </Card.Body>

      </Card>
      <Modal
        size="lg"
        show={lgShow}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header  >
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Row className="resume">
          <Document file={props.pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>


    </div>
  );
}
export default ProjectCards;
