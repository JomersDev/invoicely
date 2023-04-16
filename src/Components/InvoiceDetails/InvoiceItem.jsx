export default function InvoiceItem(props) {
    return (
        <div className="flex items-center justify-between">
            <div className="font-bold">
                <p>
                    {props.name}
                </p>
                <p className="text-ube">
                    {props.quantity} x ${props.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                </div>
                <p className="font-bold">
                    ${props.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
            </div>
    )
}