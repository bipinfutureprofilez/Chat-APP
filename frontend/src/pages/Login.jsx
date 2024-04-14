import React, { useState } from 'react'
import InputFields from '../component/InputFields'
import { Link } from 'react-router-dom';
import useLoginHook from '../hooks/LoginHook'

export default function Login() {

  const [inputs, setInputs] = useState({email: '', password: ''});
  const { signIn, processing } = useLoginHook();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const HandeOnsubmit = async (e) => {
    e.preventDefault();
    await signIn(inputs);
  }

  return (
    <div className="auth-wrapper">
      <h3>Login</h3>
      <form onSubmit={HandeOnsubmit}>
        <InputFields
          type="email"
          labelText="Email"
          name="email"
          value={inputs.email}
          onChangeHandler={handleChange}
        />
        <InputFields
          type="password"
          labelText="Password"
          name="password"
          value={inputs.password}
          onChangeHandler={handleChange}
        />
        <input type="submit" value={processing ? 'Processing...' : 'Submit'} className="theme-btn" />
        <div className="form-bottom-text">
          don't have an account? <Link to="/register">Signup</Link>
        </div>
      </form>
    </div>
  );
}
