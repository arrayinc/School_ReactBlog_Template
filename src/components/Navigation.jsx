//imports from react
import { NavDropdown, Nav, Navbar, Button, Image } from "react-bootstrap";
import { useState} from 'react'
import Admin from './Admin';
import siteData from '../SiteData';
//generates a header navigation bar with clickable links to navigate to different pages
function Navigation() {
  const [content, setContent] = useState(siteData)
  const [show, setShow] = useState(false); 
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar collapseOnSelect className="navBar" expand="lg" bg="secondary" variant="dark">
        <Navbar.Brand>
        <Image className="mx-5 logo" src="https://cdn3.iconfinder.com/data/icons/communication-media-malibu-vol-1/128/blog-512.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="header-link">
            <Nav.Link className="header-link-color mx-5" href="/">
              Home
            </Nav.Link>
            <NavDropdown
              className="mx-5"
              title="Blogs"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="blog-dropdown" href="/html">HTML</NavDropdown.Item>       
              <NavDropdown.Item className="blog-dropdown" href="/javascript">JavaScript</NavDropdown.Item>
              <NavDropdown.Item className="blog-dropdown" href="/react">React</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="header-link-color mx-5" href="/about">
              About Us
            </Nav.Link>
            <Nav.Link className="header-link-color mx-5" href="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        <Button className="header-button mx-5" size="lg" variant="outline-dark" onClick={handleShow}>Admin</Button>  
        

        <Button className="header-button mx-5" size="lg" variant="outline-dark">
          Sign In
        </Button>
      </Navbar>
      <Admin content={content} updateContent={setContent} defaultContent={siteData} setShow={setShow} show={show} />
    </>
  );
}

export default Navigation;