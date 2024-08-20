import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css'
import { Link } from 'react-router-dom';

function Na() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container style={{marginBottom:"0px"}}>
        {/* <Navbar.Brand href="/">Shauqh</Navbar.Brand> */}
        <Link className='nav-link' to='/'> <h5>Shauqh</h5> </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to='/feture'>Featured</Link>
            <Link className='nav-link' to='/pricing'>Pricing</Link>
            <NavDropdown title="Category" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Category</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Track Order</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Something
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Na;