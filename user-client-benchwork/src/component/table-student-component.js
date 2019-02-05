import React from "react";
import SubmitComponent from "component/submit-component";
const TableStudentComponent = ({ students, clickOnEdit }) => (

  <table className="table">
    <thead className="thead-dark">
      <tr>
        <th>Id Number</th>
        <th>Full Name</th>
        <th>Verdict</th>
        <th>Status</th>
        <th>Consult</th>
        <th>Edit</th>
        <th>Download</th>
      </tr>
    </thead>
    <tbody>
      {
        students.map((row, index) =>
          <tr key={index}>
            <td >{row.idnumber}</td>
            <td >{row.lastname} {row.firstname}</td>
            <td >{row.nameverdict}</td>
            <td >{row.namestatut}</td>
            <td ><SubmitComponent type='submit' value='Consult' className="btn btn-outline-info"/></td>
            <td ><SubmitComponent type='submit' prop1={row.idnumber} value='Edit'className="btn btn-outline-success" onClick={() => clickOnEdit(row.idstudent)}/></td>
            <td ><SubmitComponent type='submit' value='pdf' className="btn btn-outline-danger"/></td>
          </tr>
        )
      }
    </tbody>
  </table >


);

export default TableStudentComponent;
