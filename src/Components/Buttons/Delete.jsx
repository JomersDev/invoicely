import { useInvoiceStore } from "../../stateManagement/InvoiceStore"
import { useNavigate } from "react-router-dom"

export default function Delete({ invoice }) {

  const navigate = useNavigate()

  // delete invoice function created in InvoiceStore
  const deleteInvoice = useInvoiceStore(state => state.deleteInvoice)

  // function that sends the DELETE request and also deletes the invoice from global state if the response returned ok
  async function handleDelete() {
    const response = await fetch(`http://localhost:4000/api/invoices/${invoice._id}`, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      deleteInvoice(json._id)
      navigate('/')
    }
  }

  return (
    <button
      onClick={handleDelete} 
      className="px-6 py-3 text-white bg-red rounded-3xl">
        Delete
    </button>
  )
}
