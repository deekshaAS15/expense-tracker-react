import React from 'react'

const Filter = ({filter,setFilter}) => {
  return (
    <div className='mt-4'>
      <select
      value={filter}
      onChange={(e)=>setFilter(e.target.value)}
      className='w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500'>
        <option value="All">All Transactions</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
    </div>
  )
}

export default Filter