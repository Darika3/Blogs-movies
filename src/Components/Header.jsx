import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="success">
      <Container>
        <Link to="/">
          <Navbar.Brand style={{ color: "white" }}>Home</Navbar.Brand>
        </Link>
        <Link to="/addblog">
          <Navbar.Brand style={{ color: "white" }}>Add Blog</Navbar.Brand>
        </Link>
        <Link to="/contacts">
          <Navbar.Brand style={{ color: "white" }}>Contacts</Navbar.Brand>
        </Link>
        <Link to="/favourites">
          <Navbar.Brand style={{ color: "white" }}>Favourites</Navbar.Brand>
        </Link>
        <Link to="/aboutus">
          <Navbar.Brand style={{ color: "white" }}>About Us</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
