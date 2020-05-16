import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function Home() {
  const url = "http://localhost:3001/";
  let createInput: HTMLInputElement;

  const create = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: createInput.value }),
      });

      createInput.value = "";
    } catch (err) {
      alert("Error on create element");
      return console.error("Error on create element: ", err);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={6} md={4} lg={3} className="p-2">
          <Form onSubmit={create}>
            <Form.Control
              type="text"
              placeholder="New"
              ref={(input: HTMLInputElement) => {
                createInput = input;
              }}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
