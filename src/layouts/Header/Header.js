import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./_Header.css";
import logo from "../../assets/images/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

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
        <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="/service">All Services</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/service/day-tours">
            Day Tours
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/service/two-day-tours">
            Two Day Tours
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/service/three-day-tours">
            Three Day Tours
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/service/seven-day-tours">
            Seven Day Tours
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/service/nine-day-tours">
            Nine Day Tours
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/service/twelve-day-tours">
            Twelve Day Tours
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/service/city-tours">
            City Tours
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/gallery">Gallery</Nav.Link>
        <Nav.Link href="/contacts">Contacts</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
