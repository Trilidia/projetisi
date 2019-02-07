import React from "react";


function buildOption(option, index) {
  return (
    <option value={option.value} key={index}>{option.label} </option>
  )
}


const SelectComponent = ({ text, id, type, name, options, className, onChange }) => (
  <div>
    <label htmlFor={id}>{text}</label>
    <select
      name={name}
      className={className}
      type={type}
      id={id}
      onChange={onChange}

    >
      <option value=''>Select option</option>
      {options.map((option, index) => buildOption(option, index))}
    </select>
  </div>
);

export default SelectComponent;
