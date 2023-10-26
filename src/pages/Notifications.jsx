import { useAuthStore } from '../../store/auth'
import { useOperationsStore } from '../../store/operations'
import BtnGoBack from '../components/BtnGoBack'
import { TbMessage2Dollar } from 'react-icons/tb'

const Notifications = () => {
  const notifications = useOperationsStore((state) => state.notifications)

  const removeNotifications = useOperationsStore((state) => state.removeNotifications)

  const userId = useAuthStore((state) => state.userProfile)

  const showNotifications = notifications.filter((notification) => notification.remiteId !== userId._id)
  const lastsNotifications = showNotifications
    .slice(-4)
    .sort((a, b) => a.date > b.date)

  return (
    <div className='pt-4'>
      <BtnGoBack />
      <div className='bg-slate-50 mt-4 p-6 md:p-16 mx-auto max-w-fit rounded-xl shadow-xl'>
        <table className='min-w-full divide-y divide-slate-300'>
          {lastsNotifications.length > 0
            ? (
                lastsNotifications.map((notification, i) => (
                  <tbody key={i}>
                    <tr>
                      <td className='py-8 px-6'>
                        <div className='flex gap-10 md:gap-72'>
                          <div className='flex'>
                            <TbMessage2Dollar className='w-6 h-6 md:w-8 md:h-8 mt-2 mx-4 md:mx-8 text-blue-600' />
                            <div className='flex flex-col md:gap-2'>
                              <span className='font-semibold'>
                                Recibiste $ {notification.cash}
                              </span>
                              <span className='text-slate-800 text-sm md:text-base'>De {notification.remite}</span>
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
          {
          lastsNotifications.length > 0 && (
            <div className='flex justify-center pt-4 md:pt-8'>
              <button onClick={removeNotifications} className='text-red-500 hover:text-red-400'>Eliminar notificaciones</button>
            </div>
          )
         }
        </table>
      </div>
    </div>
  )
}

export default Notifications
