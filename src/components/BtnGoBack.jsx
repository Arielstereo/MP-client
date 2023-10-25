import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const BtnGoBack = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-32 ml-6 md:ml-32'>
      <button onClick={() => navigate(-1)}><AiOutlineArrowLeft className='w-6 h-6 font-semibold' /></button>
    </div>
  )
}

export default BtnGoBack
