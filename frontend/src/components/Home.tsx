import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

function Home() {
  const url = "http://localhost:3001/";

  interface IElement {
    _id?: string;
    content?: string;
  }

  const [elements, setElements] = useState<IElement[]>([]);

  let createInput: HTMLInputElement;

  useEffect(() => {
    read();
  }, []);

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

      read();
    } catch (err) {
      alert("Error on create element");
      return console.error("Error on create element: ", err);
    }
  };

  const read = async () => {
    try {
      const response = await fetch(url);
      const elements: IElement[] = await response.json();

      return setElements(elements);
    } catch (err) {
      alert("Error on read elements");
      return console.error("Error on read elements: ", err);
    }
  };

  const update = (id: string | undefined) => async (
    event: React.KeyboardEvent & React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      try {
        const response = await fetch(url + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: event.target.value }),
        });

        if (response.ok) alert("Update succeeded");
      } catch (err) {
        alert("Error on update element");
        return console.error("Error on update element: ", err);
      }
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        {elements.map((element) => (
          <Col key={element._id} sm={6} md={4} lg={3} className="p-2">
            <InputGroup>
              <InputGroup.Prepend>
                <Button variant={"danger"}>X</Button>
              </InputGroup.Prepend>
              <Form.Control type="text" defaultValue={element.content} onKeyDown={update(element._id)} />
            </InputGroup>
          </Col>
        ))}
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
