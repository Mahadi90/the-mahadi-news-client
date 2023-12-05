import React from "react";
import profile from "../../../assets/user.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const NavigationBar = () => {
        const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout().then(result => {
    console.log(result.user)
    })
    .catch(error => {
        console.log(error.message)
    })
  }

  return (
    <Container className="">
      <div className="d-flex bg-secondary p-2">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-white" speed={100} pauseOnHover={true}>
          The Mahadi news is very special.It is provide more and more important
          new that you need.Daily hot news.
        </Marquee>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary my-3">
        <Navbar.Brand className="fw-bold" href="#home">
          Daily Mahadi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className="text-decoration-none text-secondary mx-2" to="/">
              Home
            </Link>
            <Link className="text-decoration-none text-secondary mx-2">
              About
            </Link>
            <Link className="text-decoration-none text-secondary mx-2">
              Career
            </Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            {
             user?.displayName &&   <p>Hello, {user.displayName}  </p>
            }
            {user && (
              <img
                className="mx-2 rounded-circle"
                style={{ width: "50px", height : '50px' }}
                src={user.photoURL ? user.photoURL : profile}
                alt=""
              />
            )}
            {user? (
                <Link ><button className="bg-dark text-decoration-none text-white px-5 py-2 fw-bold" onClick={handleLogOut}>Logout</button></Link>
             
            ) : (
              <Link to="/signIn/login" className="bg-dark text-decoration-none text-white px-5 py-2 fw-bold">Login</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
