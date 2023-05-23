import React, { useEffect } from 'react'
import Nav from './Components/Nav'
import InvoiceList from './Pages/InvoiceList'
import { Routes, Route } from "react-router-dom"
import InvoiceDetail from './Pages/InvoiceDetail'

import { useInvoiceStore } from './stateManagement/InvoiceStore'

function App() {


  const fetchInvoices = useInvoiceStore(state => state.fetchInvoices)
  const invoices = useInvoiceStore(state => state.invoices)

  useEffect(() => {
    fetchInvoices()
  },[fetchInvoices])

  console.log(invoices)

  // map over the invoice state array and if the id matches the id of the selected invoice spread in all object details and change the status key to 'paid'

  /*
  function updateStatus(id) {
    setInvoices(invoices.map(invoice => {
      if (invoice.id === id) {
        return {...invoice, status: 'paid'}
      } else {
        return invoice
      }
    }))
  }
  */

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
      </Routes>
    </div>
  )
}

export default App
