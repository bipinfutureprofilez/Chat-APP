import React from 'react'

export default function RadioFields({ name, labelText, onGenderChange }) {
  return (
    <div className="radio-group">
      <input
        type="radio"
        name={name}
        id={labelText}
        onChange={() => onGenderChange(`${labelText}`)}
      />
      <label htmlFor={labelText}>{labelText}</label>
    </div>
  );
}
