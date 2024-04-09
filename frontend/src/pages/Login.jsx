import React from 'react'
import InputFields from '../component/InputFields'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='auth-wrapper'>
        <h3>Login</h3>
        <form>
            <InputFields type='email' labelText='Email' name='email' />
            <InputFields type='password' labelText='Password' name='password' />
            <input type="submit" value="Submit" className='theme-btn' />
            <div className="form-bottom-text">
                  don't have an account? <Link to='/register'>Signup</Link>
            </div>
        </form>
    </div>
  )
}
