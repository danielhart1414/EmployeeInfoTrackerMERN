import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Landing = () => {
    return(
        <Container>
            <h1 className="my-4">Welcome to EmployeeData!</h1>

            <p>This app allows you to store employee information in a database. Click below to start.</p>

            <Button variant="info" className="btn-lg text-white" href="/tracker">
                Start
            </Button>
        </Container>
    );
}

export default Landing;