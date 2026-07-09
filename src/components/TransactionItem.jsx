import React from 'react'

const TransactionItem = ({transaction,deleteTransaction}) => {
    const isIncome = transaction.type === "Income";
  return (
    <div className='flex justify-between items-center bg-white p-4 rounded-lg shadow mb-3 border-l-4 border-blue-500'>
        <div>
            <h3 className='font-semibold'>{transaction.title}</h3>
            <p className='text-sm text-gray-500'>{transaction.category} • {transaction.date}</p>
        </div>

        <p className={`font-bold ${isIncome ? "text-green-600": "text-red-600"}`}>
            {isIncome ? "+" : "-"}₹{transaction.amount}
        </p>

        <button onClick={()=>deleteTransaction(transaction.id)}
                className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>Delete</button>
                
    </div>
  )
}

export default TransactionItem