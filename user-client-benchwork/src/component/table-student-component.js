import React from "react";
import SubmitComponent from "component/submit-component";
const TableStudentComponent = ({ students,  createpdf, setidstudent }) => (

  <table className="table">
    <thead className="thead">
      <tr>
        <th>Id Number</th>
        <th>Full Name</th>
        <th>Verdict</th>
        <th>Status</th>
        <th>Consult</th>
        <th>Edit</th>
        <th>Download</th>
        <th>Comment</th>

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
            <td ><SubmitComponent type='submit' value='Consult' className="btn btn-outline-info" onClick={() => setidstudent(row.idstudent,2)}/></td>
            <td ><SubmitComponent type='submit' prop1={row.idnumber} value='Edit'className="btn btn-outline-success" onClick={() => setidstudent(row.idstudent,1)}/></td>
            <td >{row.statutid != 4 ? <SubmitComponent type='submit' value='pdf' className="btn btn-outline-danger" onClick={()=>createpdf(row)}/> : <SubmitComponent type='submit' value='pdf' className="btn btn-outline-secondary"/>}</td>
            <td><SubmitComponent type='submit' value='Comment' className="btn btn-secondary btn-lg"
                onClick={()=> setidstudent(row.idstudent, 3)} /></td>
          </tr>
        )
      }
    </tbody>
  </table >


);

export default TableStudentComponent;

