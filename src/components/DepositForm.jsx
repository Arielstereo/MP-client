import { useState } from 'react'
import { depositService } from '../services/operationsService'
import { useAuthStore } from '../../store/auth'
import { useNavigate } from 'react-router-dom'
import UseAnimations from 'react-useanimations'
import loading from 'react-useanimations/lib/loading'
import { useOperationsStore } from '../../store/operations'

const DepositForm = () => {
  const [cash, setCash] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const id = useAuthStore((state) => state.id)
  const setOperation = useOperationsStore((state) => state.setOperations)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const deposit = await depositService({ id, cash })
    console.log(deposit)

    setIsLoading(true)
    setOperation({
      message: deposit.message,
      type: deposit.type,
      id: deposit.id,
      date: deposit.date,
      cash: deposit.cash
    })

    setTimeout(() => {
      navigate('/dashboard/movements')
    }, 3000)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-16 justify-center items-center'
      >
        <div className='flex items-center justify-center'>
          <span className='text-3xl font-bold text-center text-black'>$</span>
          <input
            onChange={(e) => {
              setCash(parseInt(e.target.value))
            }}
            className='text-6xl font-bold text-center text-black focus:outline-none w-48 bg-slate-200'
            placeholder='  0'
            maxLength='5'
          />
        </div>
        <span className='text-slate-400 text-sm'>Ingresa un monto menor a $100.000</span>
        {
    isLoading
      ? (
        <button
          type='submit'
          disabled='true'
          className='flex gap-2 justify-center items-center p-2 mb-4 px-8 bg-green-600 text-slate-200 font-bold border-none rounded-md transition duration-300 w-72 sm:w-96'
        >
          <UseAnimations animation={loading} size={28} strokeColor='white' /> Cargando
        </button>
        )
      : (
        <button
          type='submit'
          className={cash ? ('p-2 mb-4 px-8 bg-blue-500 hover:bg-blue-400 text-white border-none rounded-md cursor-pointer transition duration-300 w-72 sm:w-96') : ('invisible')}
        >
          Ingresar dinero
        </button>
        )
  }
      </form>
    </div>
  )
}

export default DepositForm
