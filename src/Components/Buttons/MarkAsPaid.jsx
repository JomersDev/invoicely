import { useInvoiceStore } from "../../stateManagement/InvoiceStore"

export default function MarkAsPaid({ invoice }) {

  const fetchInvoices = useInvoiceStore(state => state.fetchInvoices)

   // function that sends the PATCH request and also updates the invoice in global state if the response returned ok
  async function handleUpdate() {
    const response = await fetch(`http://localhost:4000/api/invoices/${invoice._id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        ...invoice,
        status: 'paid'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    const json = await response.json()

    if (response.ok) {
      fetchInvoices()
    }
  }
  
  return (
    <button 
      onClick={handleUpdate}
      className="px-6 py-3 text-white bg-violet rounded-3xl">
        Mark as Paid
    </button>
  )
}