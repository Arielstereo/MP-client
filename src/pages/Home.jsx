import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/login')
    }, 5000)
  }, [navigate])

  return (
    <div className='bg-blue-500 w-screen h-screen'>
      <div className='flex justify-center items-center'>
        <img className='animate-pulse animate-infinite w-48 mt-32' src='logoMP.png' alt='logo' />
      </div>
    </div>
  )
}

export default Home
