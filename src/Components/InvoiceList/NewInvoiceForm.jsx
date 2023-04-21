export default function NewInvoiceForm(props) {

    return (
        <div className="min-h-screen bg-white">
            <div 
                onClick={props.handleShowNewInvoice}
                className="flex items-center justify-start gap-x-3">
                    <img src="/icon-arrow-left.svg" alt="arrow right icon" />
                    <p className="mt-1 font-bold cursor-pointer">
                        Go 
                    </p>
            </div>
            <h1>
                New Invoice
            </h1>
            <form>
                <input type="text" placeholder="Description" />
            </form>
        </div>
    )
}