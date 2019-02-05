import React from "react";
import SubmitComponent from "component/submit-component";
import SelectNoLabelComponent from "component/select-noLabel-component";
import ChekboxComponent from "component/chekbox-component";


const TableStudentIsiComponent = ({ students, verdict, status, saveChanges, createpdf}) => (
  
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
        <th>Letter of acceptence</th>
        <th>Save</th>
      </tr>
    </thead>
    <tbody>
      {
       
        students.map((row, index) =>
          <tr key={index}>
            <td >{row.idnumber}</td>
            <td >{row.lastname} {row.firstname}</td>
            <td ><SelectNoLabelComponent type='text' options={verdict} name="verdict" defaultValue={row.verdictid} /></td>
            <td ><SelectNoLabelComponent type='text' options={status} name="statut" defaultValue={row.statutid} /></td>
            <td ><ChekboxComponent defaultValue={row.isfactured} name="factured" /></td>
            <td ><ChekboxComponent defaultValue={row.isbillpaid} name="billpaid" /></td>
            <td ><SubmitComponent type='submit' value='Consult' className="btn btn-outline-info" /></td>
            <td ><SubmitComponent type='submit' value='pdf' className="btn btn-outline-danger" onClick={()=>createpdf(row)} /></td>

            <td >
              <SubmitComponent type='submit' value='Save Changes' className="btn btn-secondary btn-lg"
                onClick={()=> saveChanges(row.idstudent, row.verdictid, row.statutid,
                  row.isfactured, row.isbillpaid)} />
            </td>
          </tr>
        )
      }
    </tbody>
  </table >


);

export default TableStudentIsiComponent;
