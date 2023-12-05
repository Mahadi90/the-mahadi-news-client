import React from "react";
import logo from "../../../assets/logo2.jpeg";
import moment from "moment";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Marquee from "react-fast-marquee";
import profile from "../../../assets/user.png";

const Header = () => {
  return (
    <Container>
      <div className="mx-auto text-center">
        <img className="w-25" src={logo} alt="" />
        <p className="text-secondary mt-2">Journalism Without Fear or Favor</p>
        <h4 className="text-secondary">
          {moment().format("dddd,MMMM D,YYYY")}
        </h4>
      </div>
      <div className="d-flex bg-secondary p-2">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-white" speed={100} pauseOnHover={true}>
          The Mahadi news is very special.It is provide more and more important
          new that you need.Daily hot news.
        </Marquee>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary my-3">
        <Container className="">
          <Navbar.Brand className="fw-bold" href="#home">
            Daily Mahadi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link to='/'>Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Career</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              <img
                className="me-2"
                style={{ width: 40 }}
                src={profile}
                alt=""
              />
              <Nav.Link
                className="bg-dark text-white px-5 fw-bold"
                href="#link"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
