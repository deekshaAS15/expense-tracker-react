import React from 'react'

const Filter2 = ({selectedMonth,selectedYear,setSelectedMonth,setSelectedYear}) => {
  return (
    <div className='flex flex-wrap gap-4 mb-4'>
         <select 
         value={selectedMonth}
         onChange={(e)=>setSelectedMonth(e.target.value)}
         className='border rounded-lg p-2'>
            <option value="all">All Month</option>
            <option value="0">Jan</option>
            <option value="1">Feb</option>
            <option value="2">Mar</option>
            <option value="3">Apr</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">Aug</option>
            <option value="8">Sep</option>
            <option value="9">Oct</option>
            <option value="10">Nov</option>
            <option value="11">Dec</option>
         </select>

         <select 
         value={selectedYear}
         onChange={(e)=>setSelectedYear(e.target.value)}
         className='border rounded-lg p-2'>
            <option value="all">All Year</option>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
         </select>
    </div>
  )
}

export default Filter2