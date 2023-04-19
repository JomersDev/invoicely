export default function NewInvoiceForm(props) {

    return (
        <div className="absolute min-h-screen bg-white top-10 right-28">
            <div 
                onClick={props.handleShowNewInvoice}
                className="flex items-center justify-start">
                    <img src="/public/icon-arrow-left.svg" alt="arrow right icon" />
                    <p className="mt-1 font-bold">
                        Go 
                    </p>
            </div>
            <h1>
                New Invoice
            </h1>
        </div>
    )
}