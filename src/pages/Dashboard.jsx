import { useEffect, useState } from 'react'
import { useAuthStore } from '../../store/auth'
import { getProfileService } from '../services/loginService'
import { RiEyeCloseLine } from 'react-icons/ri'
import { SlEye } from 'react-icons/sl'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'
import { PiIdentificationCardLight } from 'react-icons/pi'
import { BsCashCoin } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  const id = useAuthStore((state) => state.id)
  const setProfile = useAuthStore((state) => state.setUserProfile)
  const profile = useAuthStore((state) => state.userProfile)

  const resProfile = async () => {
    const res = await getProfileService(id)
    setProfile(res.data.user)
  }
  useEffect(() => {
    resProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header className='pt-8'>
      <div className='h-full mt-48 sm:mt-32 max-w-fit p-10 md:p-16 mx-auto bg-slate-50 border rounded-xl shadow-2xl'>
        <div className='ml-36 md:ml-96'>
          <Link
            to='/dashboard/movements'
            className='text-sky-500 font-semibold flex gap-2'
          >
            <span className='text-sm md:text-base'>Ir a movimientos</span>{' '}
            <IoIosArrowForward className='mt-1 md:h-5 md:w-5' />
          </Link>
        </div>
        <div>
          <h2 className='mb-4 md:text-lg font-semibold'>Disponible</h2>
          {isVisible
            ? (
              <div className='flex gap-4 md:gap-8'>
                <span className='font-semibold text-xl md:text-4xl'>
                  ${profile?.amount}
                </span>
                <button onClick={handleClick}>
                  <SlEye className='w-5 h-5 md:w-8 md:h-8 mt-1 sm:mt-0' />
                </button>
              </div>
              )
            : (
              <div className='flex gap-4 md:gap-8'>
                <span className='font-semibold text-xl md:text-4xl'>$****</span>
                <button onClick={handleClick}>
                  <RiEyeCloseLine className='w-5 h-5 md:w-8 md:h-8 mt-1 sm:mt-0' />
                </button>
              </div>
              )}
        </div>

        <div className='flex items-center gap-12 md:gap-40 mx-auto'>
          <div className='mt-16 md:mt-32 flex items-center flex-col gap-4'>
            <Link
              to='/dashboard/transfer'
              className='bg-slate-200 hover:bg-slate-300 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center'
            >
              <FaMoneyBillTransfer className='w-6 h-6 md:w-8 md:h-8' />
            </Link>
            <span className='font-semibold text-sm md:text-lg'>Transferir</span>
          </div>
          <div className='mt-16 md:mt-32 flex items-center flex-col gap-4'>
            <Link
              to='/dashboard/deposit'
              className='bg-slate-200 hover:bg-slate-300 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center'
            >
              <BsCashCoin className='w-6 h-6 md:w-8 md:h-8' />
            </Link>
            <span className='font-semibold text-sm md:text-lg'>Ingresar</span>
          </div>
          <div className='mt-16 md:mt-32 flex items-center flex-col gap-4'>
            <Link
              to='/dashboard/account'
              className='bg-slate-200 hover:bg-slate-300 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center'
            >
              <PiIdentificationCardLight className='w-6 h-6 md:w-8 md:h-8' />
            </Link>
            <span className='font-semibold text-sm md:text-lg'>Tu cvu</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Dashboard
