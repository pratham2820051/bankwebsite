import { Phone, Timer } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useLocation } from "react-router-dom";
import navItems from "../utils/nav";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const currentLocation = location.pathname.replace("/", "");

  const closeMenuForSmallScreens = () => {
    if (window.innerWidth <= 768) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Container className="flex justify-between w-full py-4">
        <img className="w-1/2 sm:w-fit" src="" alt="logo" />
        <div className="w-1/2 sm:w-fit">
          <a href="tel:9990009990">
            <Phone /> +9188800888000
          </a>
          <p className="py-3">
            <Timer /> 9-am to 5pm
          </p>
        </div>
      </Container>
      <Navbar
        sticky="top"
        expand="lg"
        className="bg-slate-950"
        data-bs-theme="dark"
        expanded={expanded}
        onToggle={(expanded) => setExpanded(expanded)}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="text-sm capitalize sm:hidden"
            style={{ fontSize: "12px" }}
          >
            Home/{currentLocation}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navItems.map((item, index) => (
                <React.Fragment key={index}>
                  {item.subItems ? (
                    <NavDropdown
                      title={item.label}
                      id={`${item.link}-dropdown`}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <NavDropdown.Item
                          as={NavLink}
                          to={subItem.link}
                          key={subIndex}
                          onClick={closeMenuForSmallScreens}
                        >
                          {subItem.label}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ) : (
                    <Nav.Link
                      as={NavLink}
                      to={item.link}
                      onClick={closeMenuForSmallScreens}
                    >
                      {item.label}
                    </Nav.Link>
                  )}
                </React.Fragment>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
