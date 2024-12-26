import React, { createContext, useState } from 'react'
import Departments from './Departments';

export let EmployeeContext = createContext()

function EmployeeDetails() {

    let [employee, setEmployee] = useState({ id: 1, eName: 'sudheer', dept: 'IT' })
    let [student, setStudent] = useState({ id: 1, stdName: 'sudheer' })
    console.log("cccccccccccc = ", employee);

    return (
        <>
            <div>EmployeeDetails</div>
            {/* <EmployeeContext.Provider value={{employee, student}}> */}
            <EmployeeContext.Provider value={employee}>
                <Departments />
            </EmployeeContext.Provider>
        </>
    )
}

export default EmployeeDetails