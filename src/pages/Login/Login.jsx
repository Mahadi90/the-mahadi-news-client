import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
 
        e.preventDefault()
        const form =  e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
 
       loginUser(email, password)
        .then(result => {
         const loggedUser = result.user;
         console.log(loggedUser)
         navigate(from, {replace : true})
        })
        .catch(error => {
         console.log(error.message)
        })
    }

  return (
    <Container
      className="bg-light border border-secondary-subtle"
      style={{ width: "350px" }}
    >
      <h2 className="text-center my-3 text-secondary">Login your account</h2>
      <Form onSubmit={handleLogin} className="mx-auto py-3 px-2">
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
