import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="About us" id="about-dropdown">
              <NavDropdown.Item as={Link} to="/about/company">
                The Company
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/vision">
                Our Vision & Mission
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/branch">
                Our Branches
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/documents">
                Legal Documents
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/report">
                Annual Reports
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/channel">
                Our Channel Partners
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/recruitment">
                Recruitment of Career
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/board">
                Board of Directors
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/terms">
                Terms & Conditions
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/security">
                Security Tips
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Deposit Schemes" id="deposit-schemes-dropdown">
              <NavDropdown.Item as={Link} to="/deposit/saving">
                Saving Deposit Scheme
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/deposit/fixed">
                Fixed Deposit Scheme
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/deposit/recurring">
                Recurring Deposit Scheme
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/deposit/daily">
                Daily Deposit Scheme
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/deposit/monthly">
                Monthly Income Scheme
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Secured Loan Schemes"
              id="loan-schemes-dropdown"
            >
              <NavDropdown.Item as={Link} to="/loan/general">
                Secured General Loan
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/loan/property">
                Secured Property Loan
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/loan/vehicle">
                Secured Vehicle Loan
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/loan/education">
                Secured Education Loan
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/loan/business">
                Secured Business Loan
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/loan/mortgage">
                Secured Mortgage Loan
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/loan/deposit">
                Secured Loan Against Deposit
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/loan/gold-silver-jewellery">
                Secured Gold, Silver, Jewellery
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link>
            <NavDropdown title="Calculator" id="calculator-dropdown">
              <NavDropdown.Item as={Link} to="/calculator/fd">
                FD Calculator
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/calculator/rd">
                RD Calculator
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/calculator/pigmy">
                Pigmy Calculator
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/calculator/mis">
                MIS Calculator
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/calculator/loan">
                Loan Calculator
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">
              Contact us
            </Nav.Link>
            <NavDropdown title="Login" id="login-dropdown">
              <NavDropdown.Item as={Link} to="/login/customer">
                Customer Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login/brand">
                Brand Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login/staff">
                Staff Login
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
