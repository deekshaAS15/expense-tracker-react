import React from 'react'
import TransactionItem from './TransactionItem'

const TransactionList = ({transactions,deleteTransaction,editTransaction}) => {
  return (
    <div className='mt-6'>
       <h2 className='text-xl font-bold mb-4'>Transaction History</h2>
       {transactions.length===0 ? (
        <p className='text-gray-500 text-center'>No transactions found</p>
       ):(
        transactions.map((transaction)=>(
            <TransactionItem key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}  />
        ))
       )}
    </div>
  )
}

export default TransactionList