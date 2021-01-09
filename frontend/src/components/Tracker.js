import React, { useEffect, useState } from 'react';
import axios from 'axios';
import serverUrl from '../env';
import UserInput from './UserInput';

// make it so only digits and . go into the field; consider making the field a string
// that validates with a regex and has an onChange handler removing bad inputs using .replace (,''); check the regex
// and then cast to number on the backend
// check mobile views; start on backend; add the form post and output tables now

const Tracker = () => {
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

    return(
        <UserInput/>
    );
}

export default Tracker;