
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import BrandIcon from './BrandIcon';
import CartWidget from './CartWidget';


function NavBar({ cartQuantity }) {

  return (
    <>
      <Navbar className="bg w-100" expand="lg">
        <BrandIcon />
        <Container className="m-4">
        <Link to='/cursoReact/'>
          <Navbar.Brand className='text-secondary fw-bold border-bottom'>Heladerías Yummy</Navbar.Brand>
        </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='justify-content-end text-end' id="basic-navbar-nav">
            <Nav>
              <NavDropdown className='text-secondary fw-bold' title="Nuestros Productos" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to='/cursoReact/productos/baldes'>
                    <h6 className="dropdown-item">Baldes</h6>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='/cursoReact/productos/postres'>
                    <h6 className="dropdown-item">Postres</h6>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='/cursoReact/productos/impulsivos'>
                    <h6 className="dropdown-item">Impulsivos</h6>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to='/cursoReact/productos/todos'>
                    <h6 className='dropdown-item fw-bold'>Ver todos</h6>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link to='/locales' className='link-secondary fw-bold'>Nuestros Locales</Nav.Link>
              <Nav.Link to='/nosotros' className='link-secondary fw-bold'>Sobre Nosotros</Nav.Link>
              <Nav.Link to='/contacto' className='link-secondary fw-bold'>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Link to='/cursoReact/carrito'>
          <CartWidget cartQuantity={cartQuantity}/>
        </Link>
      </Navbar>
    </>
  );
}

export default NavBar;