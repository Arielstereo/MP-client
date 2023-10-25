import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <img className='w-48 mt-32' src='logoMP.png' alt='logo' />
      </div>
      <div className='mt-4'>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
