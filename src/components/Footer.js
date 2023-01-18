import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{display:"flex",justifyContent:"center"}} >
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by bheem </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
