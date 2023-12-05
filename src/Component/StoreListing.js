import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function StoreListing() {
  return (
    <Container style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>Browse stores in Houston</h2>

      <Row>
        <Col xs={6} md={4}>
          <Image src="Aldi-Logo.webp" roundedCircle />
          <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
          <p>Delivery * Pickup</p>
        </Col>

        <Col xs={6} md={4}>
          <Image src="Food-Lion.webp" roundedCircle />
          <h5 style={{ fontWeight: "bold" }}>Food Lion</h5>
          <p>Delivery * Pickup</p>
        </Col>

        <Col xs={6} md={4}>
          <Image src="Publix-Logo.webp" roundedCircle />
          <h5 style={{ fontWeight: "bold" }}>Publix</h5>
          <p>Delivery</p>
        </Col>
      </Row>

      <Row>
        <Col xs={6} md={4}>
          <Image src="Aldi-Logo.webp" roundedCircle />
          <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
          <p>Delivery * Pickup</p>
        </Col>

        <Col xs={6} md={4}>
          <Image src="Food-Lion.webp" roundedCircle />
          <h5 style={{ fontWeight: "bold" }}>Food Lion</h5>
          <p>Delivery * Pickup</p>
        </Col>

        <Col xs={6} md={4}>
          <Image src="Publix-Logo.webp" roundedCircle />
          <h5 style={{ fontWeight: "bold" }}>Publix</h5>
          <p>Delivery</p>
        </Col>
      </Row>
    </Container>
  );
}

export default StoreListing;
