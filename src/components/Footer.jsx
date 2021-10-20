//imports from react
import { NavDropdown, Nav, Navbar } from "react-bootstrap";

//generates a footer navigation bar with clickable links to navigate to different pages
function Footer() {
  return (
      <Navbar className="footer" collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav className="ml-5">
            <NavDropdown
              drop="up"
              title="Blogs"
            >
              <NavDropdown.Item href="/html">
                HTML
              </NavDropdown.Item>
              <NavDropdown.Item href="/javascript">
                JavaScript
              </NavDropdown.Item>
              <NavDropdown.Item href="/react">
                React
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mx-auto">
            <Navbar.Brand className="mx-auto">
            </Navbar.Brand>
          </Nav>
          <Nav className="mr-5">
            <Nav.Link className="footer-link-color" href="/about">
              About Us
            </Nav.Link>
          </Nav>
          <Nav className="mx-auto">
            <Nav.Link href="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Footer;
