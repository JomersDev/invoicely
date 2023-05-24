import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { useInvoiceStore } from './stateManagement/InvoiceStore'

// Components and Pages
import Nav from './Components/Nav'
import InvoiceList from './Pages/InvoiceList'
import InvoiceDetail from './Pages/InvoiceDetail'
import NewInvoice from './Pages/NewInvoice'

function App() {

  const fetchInvoices = useInvoiceStore(state => state.fetchInvoices)
  const invoices = useInvoiceStore(state => state.invoices)

  useEffect(() => {
    fetchInvoices()
  },[fetchInvoices])

  console.log(invoices)

/*

  function addInvoice(invoiceData) {
    setInvoices(invoices => {
      return [...invoices, newInvoice]
    })
  }

*/

  return (
    <div className='lg:flex'>
      <Nav />
      <Routes>
        <Route path='/' element={ <InvoiceList />} />
        <Route path='/:id' element={ <InvoiceDetail />} />
        <Route path='/create' element={ <NewInvoice />} />
      </Routes>
    </div>
  )
}

export default App
