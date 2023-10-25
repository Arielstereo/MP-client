import { BsHouseDoor, BsCardText } from 'react-icons/bs'
import { IoMdLogOut } from 'react-icons/io'
import { PiUser } from 'react-icons/pi'
import { VscBell } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'

const MobileBar = () => {
  const logout = useAuthStore((state) => state.setLogout)
  return (
    <div className='block sm:hidden absolute bottom-0 w-full py-8 bg-white shadow-2xl'>
      <ul className='flex gap-12 justify-center items-center'>
        <li><Link to='/dashboard/account'><PiUser className='w-6 h-6' /></Link></li>
        <li><Link to='/dashboard/movements'><BsCardText className='w-6 h-6' /></Link></li>
        <li><Link to='/dashboard'><BsHouseDoor className='w-10 h-10' /></Link></li>
        <li><Link to='/dashboard/notifications'><VscBell className='w-6 h-6' /></Link></li>
        <li><button onClick={logout}><IoMdLogOut className='w-6 h-6 text-red-600' /></button></li>
      </ul>
    </div>
  )
}

export default MobileBar
