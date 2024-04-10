import React from 'react'

export default function InputFields({ labelText, type, name, value, onChangeHandler }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-control"
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
}
