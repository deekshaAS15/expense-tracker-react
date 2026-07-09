import { useEffect, useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import Summary from './components/Summary'
import Search from './components/Search'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Filter from './components/Filter'
import ExpenseChart from './components/ExpenseChart'
import Filter2 from './components/Filter2'

const App = () => {

  const [transactions, setTransactions] = useState(()=>{
    const savedTransactions=localStorage.getItem("transactions")
    return savedTransactions ? JSON.parse(savedTransactions) :[];
  })

  useEffect(()=>{
    localStorage.setItem("transactions",JSON.stringify(transactions))
  },[transactions])

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [selectedMonth, setSelectedMonth] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  
  const income=transactions
  .filter((transaction)=>transaction.type === "Income")
  .reduce((total,transaction)=>total+transaction.amount,0);

  const expense=transactions
  .filter((transaction)=>transaction.type === "Expense")
  .reduce((total,transaction)=>total+transaction.amount,0);

  const balance=income-expense;

  const deleteTransaction=(id)=>{
    setTransactions(transactions.filter((transaction)=>transaction.id !==id))
  }

  const filteredTransactions = transactions.filter((transaction)=>{
    const date= new Date(transaction.date)
    const matchesSearch =transaction.title.toLowerCase().includes(search.toLowerCase())
    const matchesFilter=filter === "All" || transaction.type === filter;
    const monthMatch=selectedMonth === "all" || date.getMonth() === Number(selectedMonth);
    const yearMatch = selectedYear === "all" || date.getFullYear() === Number(selectedYear);
    return matchesSearch && matchesFilter && monthMatch && yearMatch;

  })

  return (
    <div className='min-h-screen bg-blue-950'> 
     <Header />
    
    <div className='max-w-7xl bg-gray-100 mx-auto p-6'>
      <Balance balance={balance} />
      <Summary income={income} expense={expense} />

      <div className='grid grid-cols-1 lg:grid-cols-2  gap-6 mt-6'>
      <div className='lg:col-span-2 space-y-6'>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} />
      <TransactionForm transactions={transactions} setTransactions={setTransactions} />
      <Filter2 selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} selectedYear={selectedYear} setSelectedYear={setSelectedYear}/>
      </div>

      <div className='space-y-6'>
       <TransactionList transactions={filteredTransactions} deleteTransaction={deleteTransaction} />
      </div>

      <div className='space-y-6'>
        <ExpenseChart  income={income} expense={expense} transactions={transactions} />
      </div>

       </div>
     </div>
    </div>

  )
}

export default App