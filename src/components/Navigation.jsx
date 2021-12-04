//imports from react
import {useState} from 'react';
import { NavDropdown, Nav, Navbar, Button, Image } from "react-bootstrap";
import Admin from '../components/Admin'
import {Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectContent } from "../state/contentSlice";


//generates a header navigation bar with clickable links to navigate to different pages
function Navigation() {
  const blogInfo = useSelector(selectContent)
  //these are to set up the modal
  const [show, setShow] = useState(false);
  
  const handleShow = () => {
   
    setShow(true);
  }
 

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
              id="collapsible-nav-dropdown"
            >
              {blogInfo.map((blog, i) => {
                return (
                <NavDropdown.Item key ={i} className="blog-dropdown"> <Link to ={`/${i}`}>{blog.title}</Link></NavDropdown.Item>    
                )
              })}
         
            </NavDropdown>
            <Nav.Link className="header-link-color mx-5" href="/about">
              About Us
            </Nav.Link>
            <Nav.Link className="header-link-color mx-5" href="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className="header-button mx-5" size="lg" variant="outline-dark">
          Sign In
        </Button>
        <Button onClick={handleShow}>Admin</Button>
        <Admin setShow={setShow} show={show}/>
      </Navbar>
    </>
  );
}

export default Navigation;