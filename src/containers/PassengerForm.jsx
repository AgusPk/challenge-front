import { Form, Button, Col, Container, Alert } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import PassengerRepository from "../repositories/PassengerRepository";

function PassengerForm({ history }) {
  const [passenger, setPassenger] = useState({
    name: "",
    code: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setPassenger({
      ...passenger,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (passenger.name.length && passenger.code.length === 5) {
        const createdPassenger = await PassengerRepository.createPassenger(
          passenger
        );
        history.push(`/passenger/${createdPassenger.id}`);
      }
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Vuelo"
                name="code"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Col>
        </Form.Row>
      </Form>
      {error.length > 0 && <Alert variant="danger">{error}</Alert>}
    </Container>
  );
}

export default PassengerForm;
