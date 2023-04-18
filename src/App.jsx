import React, { useState } from 'react'
import Nav from './Components/Nav'
import InvoiceList from './Pages/InvoiceList'
import { Routes, Route, useNavigate} from "react-router-dom"
import InvoiceDetail from './Pages/InvoiceDetail'
import data from './data'


function App() {

  // initial array is pulled from data.js
  const [invoices, setInvoices] = useState(data)

  const navigate = useNavigate()

  // map over the invoice state array and if the id matches the id of the selected invoice spread in all object details and change the status key to 'paid'
  function updateStatus(id) {
    setInvoices(invoices.map(invoice => {
      if (invoice.id === id) {
        return {...invoice, status: 'paid'}
      } else {
        return invoice
      }
    }))
  }

  //filter invoice state and return all invoices that do match the id of the selected invoice
  function deleteInvoice(id) {
    setInvoices(invoices.filter(invoice => invoice.id !== id))
    navigate('/')
  }

  function addInvoice(invoiceData) {
    const newInvoice = {
      id: "12345",
      createdAt: "2021-08-18",
      paymentDue: "2021-08-19",
      description: "Re-branding",
      paymentTerms: 1,
      clientName: "Jensen Huang",
      clientEmail: "jensenh@mail.com",
      status: "paid",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom"
      },
      clientAddress: {
        street: "106 Kendell Street",
        city: "Sharrington",
        postCode: "NR24 5WQ",
        country: "United Kingdom"
      },
      items: [
        {
          name: "Brand Guidelines",
          quantity: 1,
          price: 1800.90,
          total: 1800.90
        }
      ],
      total: 1800.90
    }
    setInvoices(invoices => {
      return [...invoices, newInvoice]
    })
  }

  return (
    <div className='lg:flex'>
      <Nav />
      <Routes>
        <Route path='/' element={ <InvoiceList invoices={invoices} addInvoice={addInvoice}/> } />
        <Route path='/:id' element={ <InvoiceDetail invoices={invoices} deleteInvoice={deleteInvoice} updateStatus={updateStatus}/>} />
      </Routes>
    </div>
  )
}

export default App
