import { useState } from 'react'

const TransactionForm = ({transactions,setTransactions}) => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("Income")
    const [category, setCategory] = useState("")
    const [date, setDate] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!title|| !amount|| !category|| !date){
            alert("Please fill the fields");
        }

        const newTransaction={
            id:Date.now(),
            title,
            amount:Number(amount),
            type,
            category,
            date,
        };

        setTransactions([...transactions,newTransaction]);
        setTitle("");
        setAmount("");
        setType("Income");
        setCategory("");
        setDate("");

        console.log(newTransaction);
        
    }
  return (
    <div className='bg-white shadow-md rounded-2xl p-6 mt-6'>
        <h2 className='text-xl font-bold mb-4'>Add New Transaction</h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
            <input 
            type='text' 
            placeholder='Enter title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className='w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500'/>

            <input 
            type='number' 
            placeholder='Enter amount' 
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            className='w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500'/>

            <select
            value={type}
            onChange={(e)=>setType(e.target.value)}
            className='w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500'>
                <option>Income</option>
                <option>Expense</option>
            </select>

            <input 
            type='text' 
            placeholder='Category(Food, Salary, etc.)' 
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            className='w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500'/>

            <input 
            type='date' 
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            className='w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500'/>

            <button 
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'>
                Add Transaction
            </button>
        </form>
    </div>
  )
}

export default TransactionForm