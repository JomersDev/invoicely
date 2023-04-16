import React, { useState } from 'react'
import Nav from './Components/Nav'
import InvoiceList from './Pages/InvoiceList'
import { Routes, Route, useNavigate} from "react-router-dom"
import InvoiceDetail from './Pages/InvoiceDetail'
import data from './data'


function App() {

  const [invoices, setInvoices] = useState(data)

  const navigate = useNavigate()

  function updateStatus(id) {
    setInvoices(invoices.map(invoice => {
      if (invoice.id === id) {
        return {...invoice, status: 'paid'}
      } else {
        return invoice
      }
    }))
  }

  function deleteInvoice(id) {
    console.log(invoices)
    setInvoices(invoices.filter(invoice => invoice.id !== id))
    navigate('/')
  }

  return (
    <div className='lg:flex'>
      <Nav />
      <Routes>
        <Route path='/' element={ <InvoiceList invoices={invoices}/> } />
        <Route path='/:id' element={ <InvoiceDetail invoices={invoices} deleteInvoice={deleteInvoice} updateStatus={updateStatus}/>} />
      </Routes>
    </div>
  )
}

export default App
