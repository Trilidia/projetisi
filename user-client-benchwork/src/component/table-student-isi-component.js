import React from "react";
import SubmitComponent from "component/submit-component";

const TableStudentIsiComponent = ({ students, clickOnEdit, createpdf, writeComment, consultstudent}) => (
  
  <table className="table">
    <thead className="thead-dark">
      <tr>
        <th>Id Number</th>
        <th>Full Name</th>
        <th>Verdict</th>
        <th>Status</th>
        <th>Factured</th>
        <th>Bill Payaid</th>
        <th>Consult</th>
        <th>Edit</th>
        <th>Letter of acceptence</th>
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
            <td className={(row.isfactured)?"text-success":"text-danger"}>{(row.isfactured)?"yes":"no"}</td>
            <td className={(row.isfactured)?"text-success":"text-danger"}>{(row.isbillpaid)?"yes":"no"}</td>
            <td ><SubmitComponent type='submit' value='Consult' className="btn btn-outline-info" onClick={()=>consultstudent(row)}/></td>
            <td ><SubmitComponent type='submit' prop1={row.idnumber} value='Edit'className="btn btn-outline-success" onClick={() => clickOnEdit(row.idstudent)}/></td>
            <td ><SubmitComponent type='submit' value='pdf' className="btn btn-outline-danger" onClick={()=>createpdf(row)} /></td>

            <td >
              <SubmitComponent type='submit' value='Comment' className="btn btn-secondary btn-lg"
                onClick={()=> writeComment(row.idstudent, 4)} />
            </td>
          </tr>
        )
      }
    </tbody>
  </table >


);

export default TableStudentIsiComponent;
