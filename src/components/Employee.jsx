import React from "react";
import Buttons from "./Buttons";

function Employee() {
  return (
    <>
      <div>Employee</div>
      <table style={{ border: "3px solid rgb(0, 0, 0)" }}>
        <thead>
          <th> Name</th>
          <th> Age</th>
        </thead>
        <tbody>
          <tr>
            <td>Sudheer</td>
            <td>29</td>
          </tr>
        </tbody>
      </table>

      <Buttons buttonName="Save" showButton="true" />
      <Buttons buttonName="Cancel" showButton="true" />
    </>
  );
}

export default Employee;
