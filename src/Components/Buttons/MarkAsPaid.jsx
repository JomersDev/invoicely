export default function MarkAsPaid(props) {
    return (
        <button 
            onClick={() => props.updateStatus(props.invoice.id)}
            className="px-6 py-3 text-white bg-violet rounded-3xl">
                Mark as Paid
        </button>
    )
}