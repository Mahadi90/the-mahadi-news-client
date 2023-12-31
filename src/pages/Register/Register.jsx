import React, { useState } from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

    const { careteUser, craeteProfile } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)

   const handleregister = e => {

       e.preventDefault()
       const form =  e.target;
       const name = form.name.value;
       const photo = form.photo.value;
       const email = form.email.value;
       const password = form.password.value;
       console.log(name,photo,email,password)

       careteUser(email, password)
       .then(result => {
        const createdUser = result.user;
        console.log(createdUser)
        craeteProfile(name,photo)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
       })
       .catch(error => {
        console.log(error.messgae)
       })
   }

   const handleCheckbox = e => {
    setAccepted(e.target.checked)
   }

    return (
        <Container
        className="bg-light border border-secondary-subtle"
        style={{ width: "350px" }}
      >
        <h2 className="text-center my-3 text-secondary">Register your account</h2>
        <Form onSubmit={handleregister} className="mx-auto py-3 px-2">
        <Form.Group className="mb-3" >
          <Form.Label>Your Name</Form.Label>
          <Form.Control
           type="text" 
           name="name" 
           placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Your photo URL</Form.Label>
          <Form.Control
           type="text" 
           name="photo" 
           placeholder="Photo URL" />
        </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control
             type="email" 
             name="email" 
             placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
      <Form.Check // prettier-ignore
      onClick={handleCheckbox}
        type="switch"
        id="custom-switch"
        label="Accept terms and condition"
        name="condition"
      />
          <Button
            className="mt-2 w-100 bg-dark text-decoration-none text-white px-5 py-2 fw-bold"
            type="submit"
            disabled={accepted}
          >
            Submit
          </Button>
  
          <p className="mt-3">
             Already have an account? please{" "}
            <Link to="/signIn/login">Login</Link>
          </p>
        </Form>
      </Container>
    );
};

export default Register;