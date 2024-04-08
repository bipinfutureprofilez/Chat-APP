import React from 'react'

export default function InputFields(props) {
  return (
    <div className='input-group'>
          <label htmlFor={props.name}>{props.labelText}</label>
          <input type={props.type} name={props.name} id={props.name} className='form-control' />
    </div>
  )
}
