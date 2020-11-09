import React from 'react';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// make it so only digits and . go into the field; consider making the field a string
// that validates with a regex and has an onChange handler removing bad inputs using .replace (,''); check the regex
// and then cast to number on the backend
// check mobile views; start on backend; add the form post and output tables now

const UserInput = () => {

    const getAdjustedDate = (adjustment) => {
        let date = new Date();
        date.setFullYear(date.getFullYear() - adjustment);
        return date;
    }

    const schema = yup.object().shape({
        id: yup.string().required("Please enter an ID"),
        firstName: yup.string().required("Please enter a first name"),
        lastName: yup.string().required("Please enter a last name"),
        department: yup.string().required("Please enter a department"),
        birthdate: yup.date()
            .typeError("Please enter a valid date")
            .max(getAdjustedDate(16), "Either this date has not arrived yet, or this person may be too young to work for you.")
            .min(getAdjustedDate(125), "Is this person still alive?")
            .required(),
        salary: yup.number()
            .integer("Please round to the nearest dollar")
            .typeError("Please enter a valid salary number")
            .required()
    });

    const { register, handleSubmit, errors, formState } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = () => {

    }

    return(
        <Container>
            <h3 className="mt-4">Submit new employee info here</h3>

            <Form className="my-3" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup controlId="formId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                        type="text"
                        name="id"
                        isValid={formState.isSubmitted && formState.touched.id && !errors.id}
                        isInvalid={errors.id}
                        placeholder="0000"
                        ref={register}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.id?.message}
                    </Form.Control.Feedback>
                </FormGroup>
                        
                <FormGroup controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        isValid={formState.isSubmitted && formState.touched.firstName && !errors.firstName}
                        isInvalid={errors.firstName}
                        placeholder="John"
                        ref={register}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.firstName?.message}
                    </Form.Control.Feedback>
                </FormGroup>

                <FormGroup controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        isValid={formState.isSubmitted && formState.touched.lastName && !errors.lastName}
                        isInvalid={errors.lastName}
                        placeholder="Smith"
                        ref={register}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.lastName?.message}
                    </Form.Control.Feedback>
                </FormGroup>

                <FormGroup controlId="formDepartment">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                        type="text"
                        name="department"
                        isValid={formState.isSubmitted && formState.touched.department && !errors.department}
                        isInvalid={errors.department}
                        placeholder="Exploration"
                        ref={register}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.department?.message}
                    </Form.Control.Feedback>
                </FormGroup>
                
                <FormGroup controlId="formBirthdate">
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control
                        type="date"
                        name="birthdate"
                        isValid={formState.isSubmitted && formState.touched.birthdate && !errors.birthdate}
                        isInvalid={errors.birthdate}
                        ref={register}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.birthdate?.message}
                    </Form.Control.Feedback>
                </FormGroup>

                <FormGroup controlId="formSalary">
                    <Form.Label>Salary ($)</Form.Label>
                    <Form.Control
                        type="number"
                        name="salary"
                        isValid={formState.isSubmitted && formState.touched.salary && !errors.salary}
                        isInvalid={errors.salary}
                        min="0"
                        step="1"
                        placeholder="100"
                        ref={register}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.salary?.message}
                    </Form.Control.Feedback>
                </FormGroup>

                <Button variant="info" className="btn-lg mt-1" type="submit">Submit</Button>
            </Form>
        </Container>
    );
}

export default UserInput;