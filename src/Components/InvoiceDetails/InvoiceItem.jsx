export default function InvoiceItem(props) {
    return (
        <>
            {/* Mobile view */}
            <div className="flex items-center justify-between md:hidden">
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

            {/* Tablet and up view */}
            <div className="items-center justify-between hidden md:flex">
                <p className="w-32 font-bold">
                    {props.name}
                </p>
                <div className="flex gap-x-16">
                    <p className="w-4 font-bold text-ube">
                        {props.quantity}
                    </p>
                    <p className="w-20 font-bold text-ube">
                        ${props.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <p className="w-20 font-bold">
                        ${props.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                </div>
            </div>
        </>
    )
}