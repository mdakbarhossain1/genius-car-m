import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    const {user , logOut} = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Genious Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
                        <Nav.Link as={Link} to="/manageServices">Manage Services</Nav.Link>
                       {user?.email ?
                            <Button variant="light" onClick={logOut}> Logout</Button>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        
                    </Navbar.Collapse>

                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;