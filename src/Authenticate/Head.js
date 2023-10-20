import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
   <>
 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/login'}>Logout</Nav.Link>
            <Nav.Link as={Link} to={'/reg'}>Register</Nav.Link>
            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

   </>
  )
}

export default Head

