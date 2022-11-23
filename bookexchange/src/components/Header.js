import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/logo.png';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const title = "BookExchange";
  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{' '}
            {title} 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/devweb" className="nav-link">
              Home
            </Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <Link to="/createBook" className="dropdown-item">
                Crear
              </Link>
              <Link to="/editBook" className="dropdown-item">
                Editar
              </Link>
              <Link to="/listBook" className="dropdown-item">
                Listar
              </Link>
            </NavDropdown>
            <Link to="/conocenos" className="nav-link">
              Conócenos
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Libros..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;