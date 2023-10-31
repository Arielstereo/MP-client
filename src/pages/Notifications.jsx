import { useAuthStore } from '../../store/auth'
import BtnGoBack from '../components/BtnGoBack'
import { TbMessage2Dollar } from 'react-icons/tb'
import { loadNotification } from '../services/operationsService'
import { useEffect, useState } from 'react'

const Notifications = () => {
  const id = useAuthStore((state) => state.id)
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    loadNotification(id).then((data) => {
      setNotifications(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='pt-4'>
      <BtnGoBack />
      <div className='bg-slate-50 mt-4 p-6 md:p-16 mx-auto max-w-fit rounded-xl shadow-xl'>
        <table className='min-w-full divide-y divide-slate-300'>
          {notifications.length > 0
            ? (
                notifications.slice(0, 4).map((notification, i) => (
                  <tbody key={i}>
                    <tr>
                      <td className='py-8 px-6'>
                        <div className='flex gap-10 md:gap-72'>
                          <div className='flex'>
                            <TbMessage2Dollar className='w-6 h-6 md:w-8 md:h-8 mt-2 mx-4 md:mx-8 text-blue-600' />
                            <div className='flex flex-col md:gap-2'>
                              <span className='font-semibold'>
                                Recibiste $ {notification.message}
                              </span>
                              <span className='text-slate-800 text-sm md:text-base'>De {notification.sender.username} {notification.sender.lastName}</span>
                            </div>
                          </div>
                          <div>
                            <span className='text-sm text-slate-500'>
                              {notification.date}
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))
              )
            : (
              <h2 className='text-xl md:text-2xl text-bold'>
                No tienes notificaciones!
              </h2>
              )}
        </table>
      </div>
    </div>
  )
}

export default Notifications
