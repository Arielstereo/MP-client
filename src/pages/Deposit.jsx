import BtnGoBack from '../components/BtnGoBack'
import DepositForm from '../components/DepositForm'

const Deposit = () => {
  return (
    <div className='pt-2 sm:pt-4'>
      <BtnGoBack />
      <div className='mt-4 sm:mt-8'>
        <h1 className='text-center font-bold text-2xl mb-32'>Cuanto queres ingresar?</h1>
        <DepositForm />
      </div>
    </div>
  )
}

export default Deposit
