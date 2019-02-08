import React from "react";

const InfoStudentComponent = ({ infoStudent }) => (
  <div className="border border-danger">
  <br/>
    <h3 className="text-danger">Full Name: {infoStudent[0].lastname} {infoStudent[0].firstname}</h3>
    <div className='container'>

      <fieldset>
        <legend>Personal information</legend>
        <div className='container'>
          <p><b>Id Number:</b> {infoStudent[0].idnumber}</p>
          <p><b>Birthday:</b> {infoStudent[0].birthday}</p>
          <p><b>Email:</b> {infoStudent[0].email}</p>
          <p><b>Phone:</b> {infoStudent[0].telephone} </p>
          <p><b>Adress:</b>{infoStudent[0].apt} - {infoStudent[0].streetno} {infoStudent[0].streetname} {infoStudent[0].province} {infoStudent[0].city} {infoStudent[0].country}</p>
        </div>
      </fieldset>

      <fieldset>
        <legend>Programme</legend>
        <div className='container'>
          <p><b>Programme:</b> {infoStudent[0].titleprogram}</p>
          <p><b>Sigle:</b> {infoStudent[0].sigle}</p>
          <p><b>Duration:</b> {infoStudent[0].totalduration}</p>
          <p><b>level:</b> {infoStudent[0].level} </p>
          <p><b>price:</b>{infoStudent[0].price} $</p>
          <p><b>Has intership:</b> {infoStudent[0].hasintership} month</p>
          <p><b>Acception conditions:</b> {infoStudent[0].conditionofacceptance} </p>
        </div>
      </fieldset>

      <fieldset>
        <legend>Session</legend>
        <div className='container'>
          <p><b>Session:</b> {infoStudent[0].namesession}</p>
          <p><b>Year session:</b> {infoStudent[0].yearsession}</p>
          <p><b>Start date:</b> {infoStudent[0].datestartsession}</p>
          <p><b>End date:</b> {infoStudent[0].dateendsession} </p>
          

        </div>
      </fieldset>

      <fieldset>
        <legend>Other</legend>
        <div className='container'>
          <p><b>Verdict:</b> {infoStudent[0].nameverdict}</p>
          <p><b>Status:</b> {infoStudent[0].namestatut}</p>
          <p><b>Factured:</b> {(infoStudent[0].isfactured)?"yes":"no"}</p>
          <p><b>Bill paid:</b> {(infoStudent[0].isbillpaid)?"yes":"no"} </p>
          <p><b>Has CAQ or MIDI:</b> {(infoStudent[0].hasCAQorMIDI)?"yes":"no"} </p>
          <p><b>Exchange student:</b> {(infoStudent[0].isexchangestudent)?"yes":"no"} </p>
        </div>
      </fieldset>
    </div>
  </div >

);

export default InfoStudentComponent;
