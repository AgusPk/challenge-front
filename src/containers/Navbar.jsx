import { Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React from 'react'

function TopNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Link to='/'>
      <Navbar.Brand >Guarda Tutti</Navbar.Brand>
      </Link>
      <Navbar.Collapse id="basic-navbar-nav">
          <Link to={'/passenger/add'}>
          <Button variant="outline-success" >Agregar Pasajero</Button>
          </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav