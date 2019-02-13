import React from "react";
import SubmitComponent from "component/submit-component";
const TableStudentComponent = ({ students,  createpdf, setidstudent }) => (

  <table className="table">
    <thead className="thead">
      <tr>
        <th className="text-center">Id Number</th>
        <th className="text-center">Full Name</th>
        <th className="text-center">Verdict</th>
        <th className="text-center">Status</th>
        <th className="text-center">Consult</th>
        <th className="text-center">Edit</th>
        <th className="text-center">Download</th>
        <th className="text-center">Comment</th>

      </tr>
    </thead>
    <tbody>
      {
        students.map((row, index) =>
          <tr key={index}>
            <td className="text-center">{row.idnumber}</td>
            <td className="text-center">{row.lastname} {row.firstname}</td>
            <td className="text-center">{row.nameverdict}</td>
            <td className="text-center">{row.namestatut}</td>
            <td className="text-center"><SubmitComponent type='submit' value='Consult' className="btn btn-outline-info" onClick={() => setidstudent(row.idstudent,2)}/></td>
            <td className="text-center"><SubmitComponent type='submit' prop1={row.idnumber} value='Edit'className="btn btn-outline-success text-center" onClick={() => setidstudent(row.idstudent,1)}/></td>
            <td className="text-center">{row.statutid != 4 ? <SubmitComponent type='submit' value='pdf' className="btn btn-outline-danger text-center" onClick={()=>createpdf(row)}/> : <SubmitComponent type='submit' value='pdf' className="btn btn-outline-secondary"/>}</td>
            <td ><SubmitComponent type='submit' value='Comment' className="btn btn-secondary btn-lg text-center"
                onClick={()=> setidstudent(row.idstudent, 3)} /></td>
          </tr>
        )
      }
    </tbody>
  </table >


);

export default TableStudentComponent;

