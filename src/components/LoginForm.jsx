import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginService } from '../services/loginService'
import { useAuthStore } from '../../store/auth'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const setToken = useAuthStore((state) => state.setToken)
  const setId = useAuthStore((state) => state.setId)
  const setName = useAuthStore((state) => state.setUsername)
  const setAmount = useAuthStore((state) => state.setAmount)
  const setAlias = useAuthStore((state) => state.setAlias)
  const setLastName = useAuthStore((state) => state.setLastName)
  const setMail = useAuthStore((state) => state.setEmail)

  const handleSubmitted = async (e) => {
    e.preventDefault()
    const res = await loginService({ email, password })

    if (res.status === 'InvalidEmail') {
      return setError(res.message)
    }
    if (res.status === 'PassInvalid') {
      return setError(res.message)
    }
    if (res.status === 'Undefined') {
      return setError('Todos los campos son requeridos!')
    }

    setToken(res.data.token)
    setId(res.data.id)
    setName(res.data.username)
    setAmount(res.data.amount)
    setAlias(res.data.alias)
    setLastName(res.data.lastName)
    setMail(res.data.email)
    navigate('/dashboard')
  }

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <form onSubmit={handleSubmitted} className='w-full max-w-xs'>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            type='email'
            className='w-full px-4 py-2 text-gray-700 bg-slate-200 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            placeholder='user@email.com'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-700'
          >
            Contraseña
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            type='password'
            className='w-full px-4 py-2 text-gray-700 bg-slate-200 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            placeholder='*****'
          />
        </div>
        <button
          type='submit'
          className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          Ingresar
        </button>
        <div className='text-center mt-2'>
          {error && (
            <span className='text-lg font-semibold text-red-500'>{error}</span>
          )}
        </div>
      </form>
      <p className='mt-4 text-sm text-gray-600'>
        No tienes una cuenta?{' '}
        <Link to='/register' className='text-blue-500 hover:underline'>
          Registrate!
        </Link>
      </p>
    </div>
  )
}

export default LoginForm
