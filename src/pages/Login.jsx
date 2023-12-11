import React from 'react'
import './CSS/login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className='logincontainer'>
        <h1>Sign Up</h1>
        <div className="loginfields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />

        </div>
        <button>Continue</button>
        <p className='loginlogin'>Already have an account? <span>Login here</span></p>
        <div className="loginagree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms and conditions.</p>
        </div>
      </div>
    </div>
  )
}

export default Login