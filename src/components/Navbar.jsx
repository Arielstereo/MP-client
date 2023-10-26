import { useAuthStore } from '../../store/auth'
import { PiUser } from 'react-icons/pi'
import { IoMdLogOut, IoIosArrowForward } from 'react-icons/io'
import { VscBellDot } from 'react-icons/vsc'
import { BsHouseDoor, BsCardText, BsCashCoin } from 'react-icons/bs'
import { FaMoneyBillTransfer } from 'react-icons/fa6'

import { Link } from 'react-router-dom'
import { useOperationsStore } from '../../store/operations'
import { useState } from 'react'

const Navbar = () => {
  const logout = useAuthStore((state) => state.setLogout)
  const username = useAuthStore((state) => state.username)
  const userId = useAuthStore((state) => state.id)
  const notifications = useOperationsStore((state) => state.notifications)

  const [isVisible, setIsVisible] = useState(false)

  const alertNotifications = notifications.filter(
    (notification) => notification.remiteId !== userId
  )

  return (
    <div className='fixed top-0 left-0 right-0 bg-sky-500 shadow-2xl'>
      <div className='container mx-auto py-4'>
        <nav className='flex items-center mx-2 justify-between h-16'>
          <div className='flex items-center ml-2 gap-2 lg:gap-4'>
            <div className='text-xl lg:text-2xl text-white text-bold border border-white rounded-full p-2'>
              <PiUser />
            </div>
            <span className='text-xl text-bold text-slate-100'>
              Hola, {username[0].toUpperCase() + username.substring(1)}
            </span>
            <button onClick={() => setIsVisible(!isVisible)} className='hidden sm:block lg:text-2xl text-white text-bold mt-1 cursor-pointer'>
              <IoIosArrowForward />
            </button>
          </div>
          <div className={isVisible ? 'absolute bg-slate-200 border border-slate-400 w-64 h-screen top-24 left-0 shadow-xl' : 'hidden'}>
            <div className='flex flex-col gap-12 px-8 pt-12 '>
              <div className='border-b border-slate-400 p-4'>
                <Link className='flex gap-4 hover:text-blue-500' to='/dashboard'>
                  <BsHouseDoor className='w-6 h-6 font-semibold' /> <span className='font-semibold'>Inicio</span>
                </Link>
              </div>
              <div className='border-b border-slate-400 p-4'>
                <Link className='flex gap-4 hover:text-blue-500' to='/dashboard/account'>
                  <PiUser className='w-6 h-6 font-semibold' /> <span className='font-semibold'>Tu perfil</span>
                </Link>
              </div>
              <div className='border-b border-slate-400 p-4'>
                <Link className='flex gap-4 hover:text-blue-500' to='/dashboard/movements'>
                  <BsCardText className='w-6 h-6 font-semibold' /> <span className='font-semibold'>Actividad</span>
                </Link>
              </div>
              <div className='border-b border-slate-400 p-4'>
                <Link className='flex gap-4 hover:text-blue-500' to='/dashboard/transfer'>
                  <FaMoneyBillTransfer className='w-6 h-6 font-semibold' /> <span className='font-semibold'>Enviar dinero</span>
                </Link>
              </div>
              <div className='border-b border-slate-400 p-4'>
                <Link className='flex gap-4 hover:text-blue-500' to='/dashboard/deposit'>
                  <BsCashCoin className='w-6 h-6 font-semibold' /> <span className='font-semibold'>Ingresar dinero</span>
                </Link>
              </div>
              <button
                className='hover:text-blue-500 p-4 flex gap-4'
                onClick={logout}
              >
                <IoMdLogOut className='w-7 h-7 font-semibold' /> <span className='font-semibold'>Cerrar sesión</span>
              </button>
            </div>
          </div>

          <div className='flex items-center mr-4'>
            {alertNotifications.length > 0 && (
              <Link to='/dashboard/notifications'>
                <VscBellDot className='w-7 h-7 text-red-600' />
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
