import Button from "react-bootstrap/Button";
import React from "react";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";
import Qzone from "../Q-zone/Qzone";
import bgimg from '../../../assets/bg.png'

const RughtNav = () => {
  return (
    <div>
      <div>
        <h3>Login with</h3>
        <Button className="px-5 my-1" variant="outline-danger">
          <FaGoogle className="me-2" />
          Login with Google
        </Button>
        <Button className="px-5 my-1" variant="outline-dark">
          <FaGithub className="me-2"></FaGithub>Login with Github
        </Button>
      </div>
      <div className="my-3">
        <h3 >Find us on</h3>
        <ListGroup>
      <ListGroup.Item><FaFacebook className="text-primary"></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter className="text-primary"></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram className="text-danger"></FaInstagram> Instagram</ListGroup.Item>
     </ListGroup>
      </div>
      <Qzone></Qzone>

      <div className="mt-3 w-full position-relative">
      <img className="w-100" src={bgimg} alt="" />
      <div className="p-5 mt-5 text-center position-absolute top-0 start-0 text-white">
      <h2>Create an Amazing Newspaper</h2>
      <p className="my-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
      <Button variant="danger">
         Lern More
        </Button>
      </div>
      </div>
    </div>
  );
};

export default RughtNav;
