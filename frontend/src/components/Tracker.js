import React, { useState } from 'react';
import UserInput from './UserInput';
import InfoTable from './InfoTable';

// TODOs:
// - Make it so only digits and . go into the salary field; consider making the field a string
//      that validates with a regex and has an onChange handler removing bad inputs using .replace (,'');
//      check the regex and then cast to number; the onChange handler could also add commas for thousands
//      and a $
// - Add comma and $ to table's salary field
// - Improve mobile InfoTable layout

const Tracker = () => {
    const [ employeeBeingModified, setEmployeeBeingModified ] = useState(null);
    const [ employeeIsBeingAdded, setEmployeeIsBeingAdded ] = useState(false);

    return(
        <div>
            {employeeIsBeingAdded || employeeBeingModified ?
                <UserInput
                    setEmployeeIsBeingAdded={setEmployeeIsBeingAdded}
                    employeeBeingModified={employeeBeingModified}
                    setEmployeeBeingModified={setEmployeeBeingModified}
                />
            :
                <InfoTable
                    setEmployeeIsBeingAdded={setEmployeeIsBeingAdded}
                    setEmployeeBeingModified={setEmployeeBeingModified}
                />
            }
        </div>
    );
}

export default Tracker;