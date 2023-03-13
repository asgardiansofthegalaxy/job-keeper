import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "../styles/Navigation.css";

const Navigation = () => {
  const links = [
    { href: "/about", title: "About" },
    { href: "/team", title: "Team" },
  ];
  return (
    <div className="Navigation">
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Nav.Link href="/">
          <Navbar.Brand className="brand-name">Job Seeker</Navbar.Brand>
        </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {links.map((link, i) => (
                <Nav.Link key={i} className="navLinkItem" href={link.href}>
                  {link.title}
                </Nav.Link>
              ))}
              <Button variant="outline-primary">Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
