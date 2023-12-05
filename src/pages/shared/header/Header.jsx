import React from "react";
import logo from "../../../assets/logo2.jpeg";
import moment from "moment";
import { Container } from "react-bootstrap";




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
    </Container>
  );
};

export default Header;
