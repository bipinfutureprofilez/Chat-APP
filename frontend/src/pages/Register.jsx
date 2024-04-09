import React from 'react'
import InputFields from '../component/InputFields'
import RadioFields from '../component/RadioFields'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="auth-wrapper">
      <h3>Register</h3>
      <form>
        <InputFields type="text" labelText="Full name" name="name" />
        <InputFields type="email" labelText="Email" name="email" />
        <div className="input-group">
          <label>Gender</label>
          <div className="radio-lists">
            <RadioFields labelText="Male" name="gender" />
            <RadioFields labelText="Female" name="gender" />
            <RadioFields labelText="Other" name="gender" />
          </div>
        </div>
        <InputFields type="password" labelText="Password" name="password" />
        <InputFields
          type="password"
          labelText="Confirm Password"
          name="conformpassword"
        />
        <input type="submit" value="Submit" className="theme-btn" />
        <div className="form-bottom-text">
          do have an account? <Link to="/login">Signin</Link>
        </div>
      </form>
    </div>
  );
}
