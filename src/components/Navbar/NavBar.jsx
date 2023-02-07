import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import BrandIcon from './BrandIcon';
import CartWidget from './CartWidget';


function NavBar() {
  /* const { baldes, postres, impulsivos } = products; */
  
  return (
    <>
      <Navbar bg="light" expand="lg">
        <BrandIcon />
        <Container>
          <Navbar.Brand>Heladerías Yummy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="text-end" id="basic-navbar-nav">
            <Nav className="m-4">
              <NavDropdown title="Nuestros Productos" id="basic-nav-dropdown">
{/*           <NavDropdown.Item                 
                  <Link to='/productos/servido'>
                    <h6 className="dropdown-item">Servido</h6>
                  </Link>
                </NavDropdown.Item> */}
                <NavDropdown.Item>
                  <Link to='/productos/baldes'>
                    <h6 className="dropdown-item">Baldes</h6>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='/productos/postres'>
                    <h6 className="dropdown-item">Postres</h6>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='/productos/impulsivos'>
                    <h6 className="dropdown-item">Impulsivos</h6>
                  </Link>
                </NavDropdown.Item>
{/*             <NavDropdown.Item>
                  <Link to='/productos/cafeteria'>
                    <h6 className="dropdown-item">Cafetería</h6>
                  </Link> 
                </NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to='/productos'>
                    <h6 className="dropdown-item">Ver todos</h6>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Nuestros Locales</Nav.Link>
              <Nav.Link>Sobre Nosotros</Nav.Link>
              <Nav.Link>Contacto</Nav.Link>
              <Nav.Link>
                <Link to='/products'>Nuestros Productos</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/modify'>Modificar Productos</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;