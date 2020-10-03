import React from 'react';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';

// Add Yup and react hook forms; check mobile view; then start on backend

const UserInput = () => {
    return(
        <Container>
            <h3 class="mt-4">Submit new employee info here</h3>

            <Form class="my-3">
                <FormGroup controlId="formId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" placeholder="0000" />
                </FormGroup>
                        
                <FormGroup controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" />
                </FormGroup>

                <FormGroup controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Smith" />
                </FormGroup>

                <FormGroup controlId="formDepartment">
                    <Form.Label>Department</Form.Label>
                    <Form.Control type="text" placeholder="Exploration" />
                </FormGroup>
                
                <FormGroup controlId="formBirthdate">
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control type="date" />
                </FormGroup>

                <FormGroup controlId="formSalary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="number" placeholder="100" />
                </FormGroup>

                <Button variant="info" class="btn-lg mt-1" type="submit">Submit</Button>
            </Form>
        </Container>
    );
}

export default UserInput;