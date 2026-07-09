import React from 'react'

const Balance = ({balance}) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 mt-6'>
        <h2 className='text-gray-500 text-lg lg:px-125'>Current Balance</h2>
        <h1 className='text-3xl font-bold text-green-600 lg:px-128 '>₹{balance}</h1>
    </div>
  )
}

export default Balance