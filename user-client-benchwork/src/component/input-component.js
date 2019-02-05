import React from "react";

const InputComponent = ({ text, type, id, value, onChange, className }) => (
  <div>
    <label htmlFor={id} >{text}</label>

    <input type={type} id={id} defaultValue={value} onChange={onChange} className={className}/>
  </div>

);

export default InputComponent;
