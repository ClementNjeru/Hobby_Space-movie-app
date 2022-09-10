import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function NavBar() {
  return (
    <div>
      <Navbar className="nav-section" expand="lg">
        <Container className="nav-container">
          <Navbar.Brand href="/">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav" as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link className="nav" as={Link} to={"/reviews"}>
                Reviews
              </Nav.Link>
              {/* <Nav.Link className="nav" as={Link} to={"/about"}>
                About
              </Nav.Link> */}
              <Nav.Link className="nav" as={Link} to={"/login"}>
                Login
              </Nav.Link>
              
              <Nav.Link className="nav" as={Link} to={"/contact"}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <MDBBtn
          className="m-1"
          style={{ backgroundColor: "primary", transition: "all 0.3s ease 0s" }}
          href="https://twitter.com/@Clement30572503
"
        >
          <MDBIcon fab icon="twitter" />
        </MDBBtn>
        <MDBBtn
          className="m-1"
          style={{ backgroundColor: "primary" }}
          href="https://www.linkedin.com/in/clement-njeru-9288171ab/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bmfyqo1%2FDRlic%2FO%2BY6qBTkg%3D%3D"
        >
          <MDBIcon fab icon="linkedin-in" />
        </MDBBtn>
        <MDBBtn
          className="m-1"
          style={{ backgroundColor: "primary" }}
          href="https://github.com/ClementNjeru"
        >
          <MDBIcon fab icon="github" />
        </MDBBtn>
      </Navbar>
    </div>
  );
}
export default NavBar;
