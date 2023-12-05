import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container
      className="bg-light border border-secondary-subtle"
      style={{ width: "350px" }}
    >
      <h2 className="text-center my-3 text-secondary">Login your account</h2>
      <Form className="mx-auto py-3 px-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
           type="email" 
           name="email" 
           placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button
          className="w-100 bg-dark text-decoration-none text-white px-5 py-2 fw-bold"
          type="submit"
        >
          Submit
        </Button>

        <p className="mt-3">
          Are you new to here? please{" "}
          <Link to="/signIn/register">Register</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
