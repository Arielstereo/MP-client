import React from 'react'
import TransferForm from '../components/TransferForm'
import BtnGoBack from '../components/BtnGoBack'

const Transfer = () => {
  return (
    <div className='pt-4'>
      <BtnGoBack />
      <div className='mt-16'>
        <TransferForm />
      </div>
    </div>
  )
}

export default Transfer
