import React, { useContext } from 'react'
import { EmployeeContext } from './EmployeeDetails'

function Departments() {

    let context = useContext(EmployeeContext);
    console.log("ccccccc = ", context)
    return (
        <>
            <div>Departments</div>
            <div>{context.id}</div>
            <div>{context.eName}</div>
        </>
    )
}

export default Departments