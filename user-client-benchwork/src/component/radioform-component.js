
import React from "react";

function buildOption(option, name, checked, onClick) {
  return (
    <div className="custom-control custom-radio">
      {checked === option.value ? <input className="custom-control-input" type="radio" id={name + option.value} name={name} value={option.value} onClick={onClick} defaultChecked="checked" required /> : <input className="custom-control-input" type="radio" id={name + option.value} name={name} value={option.value} onClick={onClick} required />}
      <label className="custom-control-label" htmlFor={name + option.value}>{option.label}</label>
    </div>
  )
}

const RadioFormComponent = ({ legend, id, name, options, checked, onClick }) => (

  <fieldset id={id} className="form-group" >

    <legend className="col-form-label col-sm-12 pt-0">{legend}</legend>
    <div className="col-sm-10">

      {options.map(option => buildOption(option, name, checked, onClick))}
    </div>

  </fieldset>

);

export default RadioFormComponent;
