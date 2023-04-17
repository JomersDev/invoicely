export default function Delete(props) {
    return (
        <button 
            onClick={() => props.deleteInvoice(props.invoice.id)}
            className="px-6 py-3 text-white bg-red rounded-3xl">
                Delete
        </button>
    )
}