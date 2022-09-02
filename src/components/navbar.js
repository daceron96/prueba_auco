import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const navbar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/question">Preguntas</Nav.Link>
                        <Nav.Link as={Link} to="/users">Usuarios</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
}

export default navbar;
