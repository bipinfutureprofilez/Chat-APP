import React, { useState } from 'react';
import InputFields from '../component/InputFields'
import RadioFields from '../component/RadioFields'
import { Link } from 'react-router-dom'
import RegisterHook from '../hooks/RegisterHook'
import { useAuthContext } from '../context/AuthContext';

export default function Register() {

  
  const { authUser } = useAuthContext();
  const { signUp, processing } = RegisterHook()

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const onGenderChange = (gen) => {
    setInputs((values) => ({ ...values, gender: gen }));
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await signUp(inputs);
  }

  return (
    <div className="auth-wrapper">
      <h3>Register</h3>
      <form onSubmit={handleOnSubmit}>
        <InputFields
          type="text"
          labelText="Full name"
          name="name"
          value={inputs.name}
          onChangeHandler={handleChange}
        />
        <InputFields
          type="email"
          labelText="Email"
          name="email"
          value={inputs.email}
          onChangeHandler={handleChange}
        />
        <div className="input-group">
          <label>Gender</label>
          <div className="radio-lists">
            <RadioFields
              labelText="Male"
              name="gender"
              value="male"
              onGenderChange={onGenderChange}
            />
            <RadioFields
              labelText="Female"
              name="gender"
              value="female"
              onGenderChange={onGenderChange}
            />
            <RadioFields
              labelText="Other"
              name="gender"
              value="other"
              onGenderChange={onGenderChange}
            />
          </div>
        </div>
        <InputFields
          type="password"
          labelText="Password"
          name="password"
          value={inputs.password}
          onChangeHandler={handleChange}
        />
        <InputFields
          type="password"
          labelText="Confirm Password"
          name="confirmPassword"
          value={inputs.confirmPassword}
          onChangeHandler={handleChange}
        />
        <input type="submit" value={processing ? 'Processing...' : 'Submit'} className="theme-btn" />
        <div className="form-bottom-text">
          do have an account? <Link to="/login">Signin</Link>
        </div>
      </form>
    </div>
  );
}
