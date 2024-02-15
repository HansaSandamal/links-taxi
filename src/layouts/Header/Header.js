import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/images/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./_Header.css"; // Make sure to import your CSS file

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt="Logo"
          src={logo} // Adjust the path to your logo image
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Links Taxi
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/service">All Services</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/service/day-tours">Day Tours</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/service/two-day-tours">Two Day Tours</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/service/three-day-tours">Three Day Tours</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/service/seven-day-tours">Seven Day Tours</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/service/nine-day-tours">Nine Day Tours</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/service/twelve-day-tours">Twelve Day Tours</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/service/city-tours">City Tours</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
