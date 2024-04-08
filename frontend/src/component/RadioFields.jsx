import React from 'react'

export default function RadioFields(props) {
  return (
    <div className='radio-group'>
          <input type="radio" name={props.name} id={props.labelText} checked={props.checked} />
          <label htmlFor={props.labelText}>{props.labelText}</label>
    </div>
  )
}
