import React from 'react'

const Summary = ({income,expense}) => {
  return (
    <div className='grid grid-cols-2 gap-5 mt-6'>
        <div className='bg-green-100 p-4 rounded-2xl shadow hover:shadow-xl cursor-pointer'> 
            <h3 className='text-gray-600'>Income</h3>
            <p className='text-2xl font-bold text-green-500'>₹{income}</p>
        </div>

        <div className='bg-red-100 p-4 rounded-lg shadow hover:shadow-xl cursor-pointer'>
            <h3 className='text-gray-600'>Expense</h3>
            <p className='text-2xl font-bold text-red-500'>₹{expense}</p>
        </div>
    </div>
  )
}

export default Summary