import React from "react";

const SubmitComponent = ({ type, onClick, value, className }) => (
  <div>
    <input type={type} onClick={onClick} value={value} className={className}/>
  </div>

);

export default SubmitComponent;
