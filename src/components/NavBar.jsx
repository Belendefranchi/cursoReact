import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, Route, Routes, Navigate } from "react-router-dom";
import BrandIcon from './BrandIcon';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import products from "/src/products.json";


function BasicExample() {
  const { baldes, postres, impulsivos } = products;
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
                <Link to='/cursoReact/products'>Nuestros Productos</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
      <Routes>
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route 
          path="/productos/baldes"
          element={<div className='d-flex flex-wrap justify-content-center align-items-center'>
            <ItemListContainer category={baldes}/>
          </div>} 
        />
{/*         <Route 
          path="/productos/baldes/:title"
          element={<div className='d-flex flex-wrap justify-content-center align-items-center'>
            <ItemDetail data={data}/>
          </div>} 
        /> */}
        <Route 
          path="/productos/postres"
          element={<div className='d-flex flex-wrap justify-content-center align-items-center'>
            <ItemListContainer category={postres}/>
          </div>} 
        />
        <Route 
          path="/productos/impulsivos"
          element={<div className='d-flex flex-wrap justify-content-center align-items-center'>
            <ItemListContainer category={impulsivos}/>
          </div>} 
        />
        <Route
          path="/productos"
          element={<div className='d-flex flex-wrap justify-content-center align-items-center'>
          <div className='d-flex flex-wrap justify-content-center align-items-center'>
            <ItemListContainer category={baldes}/>
          </div>
          <div className='d-flex flex-wrap justify-content-center align-items-center'>
            <ItemListContainer category={postres}/>
          </div>
          <div className='d-flex flex-wrap justify-content-center align-items-center'>
            <ItemListContainer category={impulsivos}/>
          </div>
        </div>}
        />
      </Routes>
    </>
  );
}

export default BasicExample;