import React, { useState } from 'react'
import Nav from './Components/Nav'
import InvoiceList from './Pages/InvoiceList'
import { Routes, Route} from "react-router-dom"
import InvoiceDetail from './Pages/InvoiceDetail'


function App() {

  return (
    <div className='lg:flex'>
      <Nav />
      <Routes>
        <Route path='/' element={ <InvoiceList /> } />
        <Route path='/:id' element={ <InvoiceDetail />} />
      </Routes>
    </div>
  )
}

export default App
