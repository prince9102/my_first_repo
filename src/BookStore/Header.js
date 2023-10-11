import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [data, setData] = useState()

    useEffect(()=>{
        setInterval(()=>{
            setData(localStorage.getItem('email'))
        },10)
    },[])

    return (
        <>
            <Navbar expand="lg" className="bg-dark">
                <Container fluid>
                  
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0">
                            {!data ?

                                <>
                                <Navbar.Brand className='text-white py-3' >Book Store</Navbar.Brand>
                                 <Nav.Link  as={Link} to={'/login'} className='text-white'>Login</Nav.Link>
                                    <Nav.Link  as={Link} to={'/register'} className='text-white'>Register</Nav.Link>
                                </> :
                                <>
                                    <Navbar.Brand className='text-white my-3' >Admin Panel</Navbar.Brand>
                                    <Nav.Link as={Link} to={'/login'} className='text-white'>Logout</Nav.Link>
                                    <Nav.Link as={Link} to={'/book'} className='text-white'> Book</Nav.Link>
                                    <Nav.Link as={Link} to={'/author'} className='text-white'> Author</Nav.Link>
                                   <Nav.Link as={Link} to ={'/category'} className='text-white'> Category</Nav.Link>
                                    <Nav.Link as={Link} to={'/rack'} className='text-white'> Rack</Nav.Link>
                                    <Nav.Link as={Link} to={'/table'} className='text-white'> Table</Nav.Link>

                                </>}
                        </Nav>
                      
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>



    )
}

export default Header