import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
} from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import React from "react";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <NavbarBrand href="/">KememShop</NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-bar" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart />
                Cart
              </Nav.Link>

              <Nav.Link href="/login">
                <FaUser />
                Sign In
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
