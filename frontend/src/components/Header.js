import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return(
        <header>
            <Navbar className="navbar-dark bg-info border-bottom box-shadow mb-3">
                <Container>
                    <Navbar.Brand href="/">
                        <h1>EmployeeData</h1>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;