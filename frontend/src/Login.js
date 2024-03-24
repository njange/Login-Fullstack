import React from 'react'

function Login() {
  return (
    <div>
        <div className = 'mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" className="form-control rounded-0" id="email"
                         placeholder="Enter your email" />
                    </div>
                    <div className = 'mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" className="form-control rounded-0" id="password"
                         placeholder="Enter your password" />
                    </div>
                    <button variant='primary' className='btn btn-success w-100 rounded-0'>
                        Log In</button>
                        <button variant='primary' className='btn btn-success w-100 rounded-0'>
                        Register</button>
                     <p>You agree to our Terms and Privacy Policy </p>
    </div>
  )
}

export default Login