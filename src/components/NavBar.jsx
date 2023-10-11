import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';

const NavBar = (props) => {

  const [category , setCategory] = useState('')

 
        
        return (
          <>
          
            <Navbar expand="lg" className="bg-dark">
                <Container fluid>
                    <Navbar.Brand className='text-white' >Movie App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0">
                          {!localStorage.getItem('email') ? 
                          <> <Nav.Link href={'/login'} className='text-white'>Login</Nav.Link>
                            <Nav.Link href={'/register'} className='text-white'>Register</Nav.Link>
</> :
<> 
                            <Dropdown  onSelect={(selectedCategory)=> props.categoryData(selectedCategory)} >
                            
                                <Dropdown.Toggle data-bs-theme='dark'>
                                    Category
                                </Dropdown.Toggle>

                                <Dropdown.Menu data-bs-theme='dark' >
                                    <Dropdown.Item eventKey='Crime' >Crime</Dropdown.Item>
                                    <Dropdown.Item eventKey='Drama'>Drama</Dropdown.Item>
                                    <Dropdown.Item eventKey='Music'>Music </Dropdown.Item>
                                    <Dropdown.Item eventKey='Adventure'>Adventure </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                          
                            <Nav.Link href={'/login'} className='text-white'>Logout</Nav.Link>

</>}
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e) => props.searchData(e.target.value)}

                            />
        
                        </Form> 
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
  )
}

export default NavBar