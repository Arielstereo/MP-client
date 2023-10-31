import { useOperationsStore } from '../../store/operations'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { BsCashCoin } from 'react-icons/bs'
import BtnGoBack from '../components/BtnGoBack'
import { useAuthStore } from '../../store/auth'

const Movements = () => {
  const operations = useOperationsStore((state) => state.operations)
  const userId = useAuthStore((state) => state.id)
  const movements = operations.filter(movement => movement.type === 'Transferencia' ? movement.receptorId !== userId : movement.id === userId)
  const lastsMovements = movements.slice(-5).sort((a, b) => a.date < b.date)

  return (
    <div className='pt-4'>
      <BtnGoBack />
      <div className='bg-slate-50 mt-2 p-4 md:p-16 mx-auto max-w-fit rounded-xl shadow-xl'>
        {
          movements.length > 0
            ? (
              <div className='my-4'>
                <h2 className='text-lg md:text-2xl text-bold mb-4 md:mb-8'>Ultimos movimientos</h2>
                <div className='flex h-full'>
                  <table className='divide-y divide-slate-300'>
                    {lastsMovements?.map((operation, i) => (
                      <tbody key={i}>
                        <tr className='flex mt-4 gap-2 md:gap-72'>
                          <td className='py-4 px-2'>
                            {
                          operation.type === 'Transferencia'
                            ? (

                              <div className='flex'>
                                <div className='mt-3 mx-4'>
                                  <FaMoneyBillTransfer className='w-6 h-6 md:w-8 md:h-8 text-red-600' />
                                </div>
                                <div className='flex flex-col'>
                                  <div>
                                    <span className='text-sm md:text-base font-semibold'>{operation.type} enviada</span>
                                  </div>
                                  <div className='mt-0 md:mt-1'>
                                    <span className='text-slate-600 text-sm md:text-base'>{operation.receptor}</span>
                                  </div>
                                </div>
                              </div>
                              )
                            : (
                              <div className='flex gap-4 mx-4'>
                                <BsCashCoin className='w-6 h-6 md:w-8 md:h-8 text-green-600' />
                                <span className='text-sm md:text-base font-semibold'>{operation.type}</span>
                              </div>
                              )
                        }
                          </td>
                          {
                      operation.type === 'Transferencia'
                        ? (
                          <td className='px-6 py-4 mt-1 text-red-600 font-semibold flex flex-col md:gap-2'>- ${operation.cash} <span className='text-slate-600 text-xs'>{operation.date}</span></td>
                          )
                        : (
                          <td className='px-6 py-4 text-green-600 font-semibold flex flex-col md:gap-2'>+ ${operation.cash} <span className='text-slate-600 text-xs'>{operation.date}</span></td>
                          )
                    }
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>

              </div>
              )
            : (
              <div className=' mx-auto p-2 sm:p-0'>
                <h2 className='text-xl md:text-2xl text-bold'>No hay movimientos</h2>
              </div>
              )
        }
      </div>
    </div>
  )
}

export default Movements
