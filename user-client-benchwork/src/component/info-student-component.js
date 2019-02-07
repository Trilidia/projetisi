import React from "react";

const InfoStudentComponent = ({ infoStudent }) => (
  <div className="border border-info">
     <h3 className="text-info">Full Name: {infoStudent.lastname} {infoStudent.firstname}</h3>
      <p>Birthday: {infoStudent.birthday}</p>
      <p>Id Number: {infoStudent.idnumber}</p>
    

  </div >

);

export default InfoStudentComponent;
