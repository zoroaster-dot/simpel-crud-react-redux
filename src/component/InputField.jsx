import React from "react";
import "../App";
import { Form, Button, Container } from "react-bootstrap";

const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <Container>
      <Form.Label>Add Todo</Form.Label>
      <Form.Control
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <Button className="mt-2" onClick={handleSubmit}>
        Todo App
      </Button>
    </Container>
  );
};

export default InputField;
