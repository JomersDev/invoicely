export default function NewInvoice(props) {
    return (
       <div className="w-full min-h-screen bg-green-100">
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