import { Form, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import PassengerRepository from "../repositories/PassengerRepository";

function PassengerForm({ history }) {
  const [passenger, setPassenger] = useState({
    name: "",
    code: "",
  });

  const handleChange = (e) => {
    setPassenger({
      ...passenger,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passenger.name.length && passenger.code.length === 5) {
      const createdPassenger = await PassengerRepository.createPassenger(
        passenger
      );
      history.push(`/passenger/${createdPassenger.id}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Codigo de Vuelo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Vuelo"
          name="code"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
}

export default PassengerForm;
