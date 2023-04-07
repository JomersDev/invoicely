import React, { useState } from 'react'
import Nav from './Components/Nav'
import InvoiceList from './Pages/InvoiceList'


function App() {

  return (
    <div className='lg:flex'>
      <Nav />
      <InvoiceList />
    </div>
  )
}

export default App
