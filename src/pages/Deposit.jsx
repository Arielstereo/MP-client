import BtnGoBack from '../components/BtnGoBack'
import DepositForm from '../components/DepositForm'

const Deposit = () => {
  return (
    <div className='pt-4'>
      <BtnGoBack />
      <div className='mt-16'>
        <h1 className='text-center font-bold text-2xl mb-32'>Cuanto queres ingresar?</h1>
        <DepositForm />
      </div>
    </div>
  )
}

export default Deposit
