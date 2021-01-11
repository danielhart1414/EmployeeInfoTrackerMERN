import React from 'react';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { serverUrl } from '../env';

const UserInput = (props) => {
    
    const getAdjustedDate = (yearAdjustment) => {
        let date = new Date();
        date.setFullYear(date.getFullYear() - yearAdjustment);
        return date;
    }

    const schema = yup.object().shape({
        id: yup.string().required("Please enter an ID"),
        firstName: yup.string().required("Please enter a first name"),
        lastName: yup.string().required("Please enter a last name"),
        department: yup.string().required("Please enter a department"),
        birthdate: yup.date()
            .typeError("Please enter a valid date")
            .max(getAdjustedDate(16), "This person may be too young to work for you.")
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

    function addNewEmployee(formData) {
        axios.post(serverUrl + 'employees', formData)
            .then(() => {
                alert('Update successful!');
                props.setEmployeeIsBeingAdded(false);
            })
            .catch(err => {
                if (err.response.data.existingEntry)
                    alert('An employee with this Id already exists.');
                else
                    alert('Uh-oh--there was an error. Please try again.');
            });
    }

    function modifyEmployee(formData) {
        axios.put(serverUrl + 'employees/' + props.employeeBeingModified.id, formData)
            .then(() => {
                alert('Update successful!');
                props.setEmployeeBeingModified(null);
            })
            .catch(() => alert('Uh-oh--there was an error. Please try again.'));
    }

    const onSubmit = (formData) => {
        if (props.employeeBeingModified)
            modifyEmployee(formData);
        else
            addNewEmployee(formData);
    }

    function onCancelClick() {
        props.setEmployeeIsBeingAdded(false);
        props.setEmployeeBeingModified(null);
    }

    return(
        <Container>
            <h4 className="mt-4">Submit Employee Info</h4>

            <Form className="my-3" onSubmit={handleSubmit(onSubmit)}>
                <FormGroup controlId="formId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                        type="text"
                        name="id"
                        isValid={formState.isSubmitted && formState.touched.id && !errors.id}
                        isInvalid={errors.id}
                        defaultValue={props.employeeBeingModified?.id}
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
                        defaultValue={props.employeeBeingModified?.firstName}
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
                        defaultValue={props.employeeBeingModified?.lastName}
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
                        defaultValue={props.employeeBeingModified?.department}
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
                        defaultValue={props.employeeBeingModified?.birthdate.substr(0,10)}
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
                        defaultValue={props.employeeBeingModified?.salary}
                        placeholder="100"
                        ref={register}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.salary?.message}
                    </Form.Control.Feedback>
                </FormGroup>

                <Button
                    variant="info"
                    className="btn-lg mt-1"
                    type="submit"
                >
                    Submit
                </Button>
                <Button
                    variant="secondary"
                    className="btn-lg mt-1 ml-3"
                    onClick={onCancelClick}
                >
                    Cancel
                </Button>
            </Form>
        </Container>
    );
}

export default UserInput;