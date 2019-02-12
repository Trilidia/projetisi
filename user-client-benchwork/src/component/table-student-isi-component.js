import React from "react";
import SubmitComponent from "component/submit-component";

const TableStudentIsiComponent = ({ students, createpdf, writeComment, consultstudent,setStudentEdit}) => (
  
  <table className="table">
    <thead className="table">
      <tr>
        <th className="text-center">Id Number</th>
        <th className="text-center">Full name</th>
        <th className="text-center">Verdict</th>
        <th className="text-center">Status</th>
        <th className="text-center">Charged</th>
        <th className="text-center">Invoice paid</th>
        <th className="text-center">Consult</th>
        <th className="text-center">Edit</th>
        <th className="text-center">Letter of acceptance</th>
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
            <td className={(row.isfactured)?"text-success text-center":"text-danger text-center"}>{(row.isfactured)?"yes":"no"}</td>
            <td className={(row.isbillpaid)?"text-success text-center":"text-danger text-center"}>{(row.isbillpaid)?"yes":"no"}</td>
            <td className="text-center"><SubmitComponent type='submit' value='Consult' className="btn btn-outline-info" onClick={()=>consultstudent(row.idstudent)}/></td>
            <td className="text-center"><SubmitComponent type='submit' value='Edit'className="btn btn-outline-success"onClick={()=> setStudentEdit(row.idstudent)}/></td>
            <td className="text-center">{row.statutid != 4 ? <SubmitComponent type='submit' value='pdf' className="btn btn-outline-danger" onClick={()=>createpdf(row)}/> : <SubmitComponent type='submit' value='pdf' className="btn btn-outline-secondary"/>}</td>

            <td className="text-center">
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
