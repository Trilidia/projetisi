import React from "react";

const InputComponent = ({ text, type, id, value, onChange, className, labelClass, placeholder }) => (
  <div>
    <label htmlFor={id} className={labelClass}>{text}</label>

    <input type={type} id={id} defaultValue={value} onChange={onChange} className={className} placeholder={placeholder}/>
  </div>

);

export default InputComponent;
