import React from "react";

const ChekboxComponent = ({name, onChange, className, defaultValue, value }) => (
  <div>
    <input type="checkbox" name={name} onChange={onChange} className={className} value={value} defaultChecked={defaultValue=="1" ?"checked":""}/>
  </div>

);


export default ChekboxComponent;
