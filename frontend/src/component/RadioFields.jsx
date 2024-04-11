import React from 'react'

export default function RadioFields({ name, labelText, onGenderChange, value }) {
  return (
    <>
      <div className="form-check">
        <input
          type="radio"
          name={name}
          id={labelText}
          className="form-check-input"
          onChange={() => onGenderChange(`${value}`)}
        />
        <label className="form-check-label" htmlFor={labelText}>
          {labelText}
          </label>
      </div>
      {/* <div className="radio-group">
        <input
          type="radio"
          name={name}
          id={labelText}
          onChange={() => onGenderChange(`${labelText}`)}
        />
        <label htmlFor={labelText}>{labelText}</label>
      </div> */}
    </>
  );
}
