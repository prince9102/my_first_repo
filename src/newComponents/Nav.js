import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    const [data, setData] = useState()

    useEffect(()=>{
        setInterval(()=>{
            setData(localStorage.getItem('username'))
        },10)
    },[])

    return (
        <>
            <Navbar expand="lg" className="bg-dark">
                <Container fluid>
                    <Navbar.Brand className='text-white' >Social Media App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0">
                            {!data ?
                                <> <Nav.Link href={'/login'} className='text-white'>Login</Nav.Link>
                                    <Nav.Link href={'/signin'} className='text-white'>Register</Nav.Link>
                                </> :
                                <>
                                    <Nav.Link href={'/login'} className='text-white'>Logout</Nav.Link>
                                    <Nav.Link href={'/postdata'} className='text-white'> Add Post</Nav.Link>

                                </>}
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"


                            />

                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>



    )
}

export default Header