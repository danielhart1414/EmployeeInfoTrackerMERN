import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { serverUrl } from '../env';
import { dateOrIsoStrToMMDDYYYYStr } from '../utilities';

const InfoTable = props => {
    const [ employees, setEmployees ] = useState(null);

    function fetchEmployees() {
        axios.get(serverUrl + 'employees')
            .then(res => {
                console.log(res.data);
                setEmployees(res.data);
            })
            .catch(() => alert("Warning--bad server connection."));
    }

    useEffect(() => {
        if (!employees)
            fetchEmployees();
    });

    function deleteEmployee(employee) {
        axios.delete(serverUrl + 'employees/' + employee.id)
            .then(() => {
                alert('Employee successfully deleted!');
                fetchEmployees();
            })
            .catch(() => alert("An error occurred--please try again."));
    }

    return(
        <Container>
            {employees?.length > 0 ?
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Department</th>
                            <th>Birth Date</th>
                            <th>Salary</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.department}</td>
                                <td>{dateOrIsoStrToMMDDYYYYStr(employee.birthdate)}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    {<Button
                                        onClick={() => props.setEmployeeBeingModified(employee)}
                                    >
                                        Edit
                                    </Button>}
                                </td>
                                <td>
                                    {<Button onClick={() => deleteEmployee(employee)}>
                                        Delete
                                    </Button>}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            :
                <p>You don't have any employee info currently saved.</p>
            }
            <Button
                className='btn-lg'
                variant='info'
                onClick={() => props.setEmployeeIsBeingAdded(true)}
            >
                Add Employee
            </Button>
        </Container>
    );
}

export default InfoTable;