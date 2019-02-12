import React from "react";

const InfoStudentComponent = ({ infoStudent }) => (
  <div className="border border-danger">
    <br />
    <div className="row justify-content-center">
    <h3 className="text-danger">Full Name: {infoStudent[0].lastname} {infoStudent[0].firstname}</h3>
    </div>
    <br />

    <div className='container row'>

      <fieldset className="col-md-6 mb-6">
        <legend><b>Personal information</b></legend>
        <div className='container'>
          <p><b className="text-secondary">Id Number:</b> {infoStudent[0].idnumber}</p>
          <p><b className="text-secondary">Birthday:</b> {infoStudent[0].birthday}</p>
          <p><b className="text-secondary">Email:</b> {infoStudent[0].email}</p>
          <p><b className="text-secondary">Phone:</b> {infoStudent[0].telephone} </p>
          <p><b className="text-secondary">Adress:</b>{infoStudent[0].apt} - {infoStudent[0].streetno} {infoStudent[0].streetname} {infoStudent[0].province} {infoStudent[0].city} {infoStudent[0].country}</p>
        </div>
      </fieldset>

      <fieldset className="col-md-6 mb-6">
        <legend><b>Other</b></legend>
        <div className='container'>
          <p><b className="text-secondary">Verdict:</b> {infoStudent[0].nameverdict}</p>
          <p><b className="text-secondary">Status:</b> {infoStudent[0].namestatut}</p>
          <p><b className="text-secondary">Factured:</b> {(infoStudent[0].isfactured) ? "yes" : "no"}</p>
          <p><b className="text-secondary">Bill paid:</b> {(infoStudent[0].isbillpaid) ? "yes" : "no"} </p>
          <p><b className="text-secondary">Has CAQ or MIDI:</b> {(infoStudent[0].hasCAQorMIDI) ? "yes" : "no"} </p>
          <p><b className="text-secondary">Exchange student:</b> {(infoStudent[0].isexchangestudent) ? "yes" : "no"} </p>
        </div>
      </fieldset>
      <br />
      <br />
      <br />

      <fieldset className="col-md-6 mb-6">
        <legend><b>Programme</b></legend>
        <div className='container'>
          <p><b className="text-secondary">Programme:</b> {infoStudent[0].titleprogram}</p>
          <p><b className="text-secondary">Sigle:</b> {infoStudent[0].sigle}</p>
          <p><b className="text-secondary">Duration:</b> {infoStudent[0].totalduration}</p>
          <p><b className="text-secondary">level:</b> {infoStudent[0].level} </p>
          <p><b className="text-secondary">price:</b> {infoStudent[0].price} $</p>
          <p><b className="text-secondary">Has intership:</b> {infoStudent[0].hasintership} month</p>
          <p><b className="text-secondary">Acception conditions:</b> {infoStudent[0].conditionofacceptance} </p>
        </div>
      </fieldset>


      <fieldset className="col-md-6 mb-6">
        <legend><b>Session</b></legend>
        <div className='container'>
          <p><b className="text-secondary">Session:</b> {infoStudent[0].namesession}</p>
          <p><b className="text-secondary">Year session:</b> {infoStudent[0].yearsession}</p>
          <p><b className="text-secondary">Start date:</b> {infoStudent[0].datestartsession}</p>
          <p><b className="text-secondary">End date:</b> {infoStudent[0].dateendsession} </p>


        </div>
      </fieldset>


    </div>
  </div >

);

export default InfoStudentComponent;
