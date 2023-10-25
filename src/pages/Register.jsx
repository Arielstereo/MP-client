import React from 'react'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <img className='w-48 mt-32' src='logoMP.png' alt='logo' />
      </div>
      <div>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
