import React from 'react'
import { useState,useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {
  const  [formData, setFormData] = useState({
    name: '',
    email:'',
    password:'',
    password2:''

  })
  const {name,email,password,password2} =formData 
  const onChange =(e) =>{
    setFormData((prevstate) =>({...prevstate,[e.target.name]: e.target.value,
  }))
}
  const onSubmit =(e) =>{}
  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type='text'
              className='form-control'
              id='name' 
              name='name'
              placeholder='Enter a name'
              value={name}
              onChange={onChange} 
            />

          </div>
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
            <input type='password2'
              className='form-control'
              id='password2' 
              name='password2'
              placeholder='Confirm your password'
              value={password2}
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

export default Register
