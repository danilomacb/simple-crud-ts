import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={6} md={4} lg={3} className="p-2">
          <Form>
            <Form.Control type="text" placeholder="New" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
