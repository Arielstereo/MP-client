import { useState } from 'react'
import { editAliasService } from '../services/loginService'
import { useAuthStore } from '../../store/auth'
import BtnGoBack from './BtnGoBack'
import toast, { Toaster } from 'react-hot-toast'

const EditAliasForm = () => {
  const [alias, setAlias] = useState('')
  const [error, setError] = useState('')
  const id = useAuthStore((state) => state.id)
  const userAlias = useAuthStore((state) => state.alias)
  const setUserAlias = useAuthStore((state) => state.setAlias)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const editAlias = await editAliasService({ id, alias })
    if (editAlias.status === 'failed') {
      return setError(editAlias.message)
    }
    setUserAlias(editAlias.data.alias)
    toast.success(`${editAlias.message}`, { duration: 5000 })
  }

  return (
    <div>
      <Toaster position='bottom-center' toastOptions={{ style: { background: '#3B82F6', color: 'white', width: '800px', marginBottom: '200px' } }} />
      <BtnGoBack />
      <form onSubmit={handleSubmit} className='mt-32'>
        <div className='flex flex-col items-center justify-center gap-8'>
          <label className='font-semibold'>
            Crea un alias que sea fácil de recordar
          </label>
          <input
            onChange={(e) => setAlias(e.target.value)}
            className='p-2 border-2 border-sky-400 rounded-lg w-72 bg-slate-200'
            type='text'
            placeholder={userAlias}
          />
          {alias
            ? (
              <button className='flex gap-2 justify-center items-center p-2 mb-4 px-8 bg-green-600 text-slate-200 font-bold border-none rounded-md transition duration-300 w-72'>
                Guardar
              </button>
              )
            : (
                ''
              )}
        </div>
      </form>
      {error && (
        <div className='text-center mt-8'>
          <span className='text-red-600 font-semibold'>{error}</span>
        </div>
      )}
    </div>
  )
}

export default EditAliasForm
