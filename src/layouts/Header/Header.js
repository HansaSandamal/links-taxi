import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./_Header.css";
import logo from "../../assets/images/logo.png"

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="navbar-brand-custom" href="/">
        {" "}
        <img
          alt="Logo"
          src={logo} // Adjust the path to your logo image
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Links Taxi
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Services">Services</Nav.Link>
        <Nav.Link href="/Contacts">Contacts</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
