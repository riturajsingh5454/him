import React from 'react'
import Header from '../../components/Header'
import TableStickyHeader from '../../components/Table'

const history = () => {
  return (
    <div className="min-h-full">
        <Header page={4}/>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Transaction History</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <TableStickyHeader/>
          </div>
        </main>


      </div>
  )
}

export default history