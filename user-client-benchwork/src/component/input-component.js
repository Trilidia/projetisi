import React from "react";

const InputComponent = ({ text, type, id, value }) => (
  <div>
    <label htmlFor={id} >{text}</label>

    <input ype={type} id={id} defaultValue={value} />
  </div>

);

export default InputComponent;
