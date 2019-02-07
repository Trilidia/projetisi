import React from "react";


function buildOption(option, index, defaultValue) {
  return (
    <option value={option.value} key={index} selected={defaultValue==option.value?"selected":""}>{option.label}  </option>
  )
}


const SelectNoLabelComponent = ({ id, type, name, options, className, onChange, defaultValue, value}) => (
  <div>
    <select
      name={name}
      className={className}
      type={type}
      id={id}
      onChange={onChange}
      value={value}
    >
      {options.map((option, index) => buildOption(option, index, defaultValue))}
    </select>
  </div>
);

export default SelectNoLabelComponent;
