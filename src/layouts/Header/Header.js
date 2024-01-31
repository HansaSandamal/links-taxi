import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./_Header.css";
import logo from "../../assets/images/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";

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
          <NavDropdown.Item href="/service/airport">
            Airport Transfers
          </NavDropdown.Item>
          <NavDropdown.Item href="/service/long">
            Long Distance
          </NavDropdown.Item>
          <NavDropdown.Item href="/service/day">
            Day Tours
          </NavDropdown.Item>
          <NavDropdown.Item href="/service/city">
            City Tours
          </NavDropdown.Item>
          <NavDropdown.Item href="/service/safari">
            Yala Udawalawa Safari
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/contacts">Contacts</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
