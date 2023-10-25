import { useAuthStore } from '../../store/auth'
import { VscCopy } from 'react-icons/vsc'
import { MdOutlineModeEdit } from 'react-icons/md'
import { PiUser } from 'react-icons/pi'
import toast, { Toaster } from 'react-hot-toast'
import BtnGoBack from '../components/BtnGoBack'
import { Link } from 'react-router-dom'

const Account = () => {
  const alias = useAuthStore((state) => state.alias)
  const username = useAuthStore((state) => state.username)
  const lastName = useAuthStore((state) => state.lastName)
  const email = useAuthStore((state) => state.email)

  const copy = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      toast.success('Listo, ya copiaste tu alias!', { duration: 5000 })
    } catch (error) {
      console.error('Error al copiar el texto:', error)
    }
  }

  return (
    <header className='pt-4'>
      <Toaster position='bottom-center' toastOptions={{ style: { background: '#3B82F6', color: 'white', width: '800px', marginBottom: '100px' } }} />
      <BtnGoBack />
      <div className='bg-slate-50 shadow-2xl mx-4 md:mx-32 xl:mx-96 min-w-fit sm:max-w-full h-full border rounded-xl mt-12 divide-y divide-slate-300'>
        <h2 className='p-8 font-semibold'>Datos de tu cuenta</h2>
        <div className='p-8 flex gap-4'>
          <PiUser className='w-6 h-6' />
          <h3 className='font-semibold'>{username} {lastName}</h3>
        </div>
        <div className='p-8 flex justify-between gap-4'>
          <div className='flex flex-col'>
            <h3 className='font-semibold'>Tu alias</h3>
            <span>{alias}</span>
          </div>
          <div className='flex gap-8'>
            <Link to='/dashboard/editAlias' className='pt-3'><MdOutlineModeEdit className='w-6 h-6' /></Link>
            <button onClick={() => copy(alias)}><VscCopy className='w-6 h-6' /></button>
          </div>
        </div>

        <div className='p-8 flex flex-col gap-4'>
          <h3 className='font-semibold'>Tu email</h3>
          <span>{email}</span>
        </div>
      </div>
    </header>
  )
}

export default Account
