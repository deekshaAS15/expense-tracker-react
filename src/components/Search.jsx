import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <div className='mt-6'>
        <input type="text"
        placeholder='Search transaction'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className='w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500 ' />
    </div>
  )
}

export default Search