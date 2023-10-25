import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerService } from '../services/loginService'

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [alias, setAlias] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmitted = async (e) => {
    e.preventDefault()
    const res = await registerService({ username, lastName, email, password, alias })
    if (res.status === 'Undefined') {
      return setError(res.message)
    }
    if (res.status === 'EmailError') {
      return setError(res.message)
    }
    if (res.status === 'AliasError') {
      return setError(res.message)
    }
    navigate('/login')
    return res.data
  }

  return (
    <div className='flex flex-col items-center justify-center h-full mt-4'>
      <form onSubmit={handleSubmitted} className='w-full max-w-xs lg:max-w-sm'>
        <div className='flex gap-4'>
          <div className='mb-4'>
            <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-700'>Nombre de usuario</label>
            <input onChange={(e) => setUsername(e.target.value)} id='username' type='text' className='w-full px-4 py-2 text-gray-700 bg-slate-200 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' placeholder='Juan' />
          </div>
          <div className='mb-4'>
            <label htmlFor='lastName' className='block mb-2 text-sm font-medium text-gray-700'>Apellido</label>
            <input onChange={(e) => setLastName(e.target.value)} id='lastName' type='text' className='w-full px-4 py-2 text-gray-700 bg-slate-200 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' placeholder='Perez' />
          </div>
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-700'>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} id='email' type='email' className='w-full px-4 py-2 text-gray-700 bg-slate-200 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' placeholder='user@email.com' />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-700'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} id='password' type='password' className='w-full px-4 py-2 text-gray-700 bg-slate-200 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' placeholder='*****' />
        </div>
        <div className='mb-4 mx-auto'>
          <label htmlFor='alias' className='block mb-2 text-sm font-medium text-gray-700'>Alias</label>
          <input onChange={(e) => setAlias(e.target.value)} id='password' type='password' className='w-48 px-4 py-2 text-gray-700 bg-gray-200 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' placeholder='MY.ALIAS' />
        </div>
        <button type='submit' className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Registrarse</button>
        <div className='text-center mt-2'>
          {
          error && (
            <span className='text-lg font-semibold text-red-500'>{error}</span>
          )
        }
        </div>
      </form>
      <p className='mt-4 text-sm text-gray-600'>Ya tienes una cuenta? <Link to='/login' className='text-blue-500 hover:underline'>Ingresa</Link></p>
    </div>
  )
}

export default RegisterForm
