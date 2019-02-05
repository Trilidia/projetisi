
import React from "react";

function buildOption(option, name, checked) {
  return (
    <div className="custom-control custom-radio">
      {checked != "" ? <input className="custom-control-input" type="radio" id={name + option.value} name={name} value={option.value} checked={checked} required /> : <input className="custom-control-input" type="radio" id={name + option.value} name={name} value={option.value} required />}
      <input className="custom-control-input" type="radio" id={name + option.value} name={name} value={option.value} checked={option.value == checked ? checked : ""} required />
      <label className="custom-control-label" htmlFor={name + option.value}>{option.label}</label>
    </div>
  )
}

const RadioFormComponent = ({ legend, id, option, name, checked }) => (

  <fieldset id={id} className="form-group" >

    <legend className="col-form-label col-sm-12 pt-0">{legend}</legend>
    <div className="col-sm-10">

      {buildOption(option, name, checked)}
    </div>

  </fieldset>

);

export default RadioFormComponent;
