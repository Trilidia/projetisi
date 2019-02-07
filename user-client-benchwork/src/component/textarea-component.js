import React from "react";

const TextareaComponent = ({ text, id, value, divclass, pattern, required, inputClass, onChange, labelClass, placeholder, rows, errorMessage }) => (
    <div className={divclass}>
        <label htmlFor={id} className={labelClass}>{text}</label>
        <textarea className={inputClass} id={id} rows={rows} onChange={onChange} pattern={pattern} placeholder={placeholder} value={value} required={required}></textarea>
        <div className="invalid-feedback">
            {errorMessage}
        </div>
    </div>

);

export default TextareaComponent;
