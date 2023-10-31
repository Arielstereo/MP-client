import { useState } from 'react'
import { notificationService, transferService } from '../services/operationsService'
import { useAuthStore } from '../../store/auth'
import { useOperationsStore } from '../../store/operations'
import { useNavigate } from 'react-router-dom'
import UseAnimations from 'react-useanimations'
import loading from 'react-useanimations/lib/loading'

const TransferForm = () => {
  const [alias, setAlias] = useState('')
  const [cash, setCash] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const id = useAuthStore((state) => state.id)
  const setOperation = useOperationsStore((state) => state.setOperations)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const transfer = await transferService({ id, alias, cash })

    if (transfer.status === 'failed') {
      return setError(transfer.message)
    }
    setIsLoading(true)
    setError('')

    setOperation({
      receptor: transfer.receptor,
      remite: transfer.remite,
      receptorId: transfer.receptorId,
      remiteId: transfer.remiteId,
      cash: transfer.cash,
      type: transfer.type,
      date: transfer.date
    })

    const msg = `${transfer.cash}`
    await notificationService({ sender: transfer.remiteId, receiver: transfer.receptorId, message: msg, date: transfer.date })

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
        <div className='flex flex-col gap-4 items-start w-72 sm:max-w-fit mx-auto'>
          <label className='font-semibold'>Agrega una cuenta</label>
          <input
            onChange={(e) => {
              setAlias(e.target.value)
            }}
            type='text'
            placeholder='Ingresa el alias'
            className='p-2 mb-4 border border-slate-400 rounded-lg w-72 bg-slate-200'
          />
        </div>
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
            disabled
            className='flex gap-1 justify-center items-center py-2 mb-4 bg-green-600 text-slate-200 font-bold border-none rounded-md transition duration-300 w-72'
          >
            <UseAnimations animation={loading} size={28} strokeColor='white' /> Cargando
          </button>
          )
        : (
          <button
            type='submit'
            className={alias && cash ? ('p-2 mb-4 px-8 bg-blue-500 hover:bg-blue-400 text-white border-none rounded-md cursor-pointer transition duration-300 w-72') : ('invisible')}
          >
            Transferir
          </button>
          )
    }
      </form>
      {
        error && (
          <div className='text-center mt-8'>
            <span className='text-red-500 font-semibold'>{error}</span>
          </div>
        )
      }
    </div>
  )
}

export default TransferForm
