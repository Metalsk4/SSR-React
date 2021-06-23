import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarResponsive = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>DemoSSR</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/demo1">Demo1</Nav.Link>
                    <Nav.Link as={NavLink} to="/demo2">Demo2</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarResponsive;