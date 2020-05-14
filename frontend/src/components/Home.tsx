import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function Home() {
  const create = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(event.currentTarget.firstChild)
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={6} md={4} lg={3} className="p-2">
          <Form onSubmit={create}>
            <Form.Control type="text" placeholder="New" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
