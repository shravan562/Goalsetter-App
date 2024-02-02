import React from 'react'
import { useState,useEffect } from 'react'
import { FaSignInAlt, FaUser } from 'react-icons/fa'

function Login() {
  const  [formData, setFormData] = useState({
    
    email:'',
    password:'',
    

  })
  const {email,password} =formData 
  const onChange =(e) =>{
    setFormData((prevstate) =>({...prevstate,[e.target.name]: e.target.value,
  }))
}
  const onSubmit =(e) =>{}
  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          

          
          <div className="form-group">
            <input type='email'
              className='form-control'
              id='email' 
              name='email'
              placeholder='Enter your email'
              value={email}
              onChange={onChange} 
            />

          </div>
          <div className="form-group">
            <input type='password'
              className='form-control'
              id='password' 
              name='password'
              placeholder='Enter your password'
              value={password}
              onChange={onChange} 
            />

          </div>
          
          
          <div className="form-group">
            <button type='submit ' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
