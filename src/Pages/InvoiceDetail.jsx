import { useParams, useNavigate} from "react-router-dom"
import Status from "../Components/InvoiceDetails/Status"
import InvoiceItem from "../Components/InvoiceDetails/InvoiceItem"
import MarkAsPaid from "../Components/Buttons/MarkAsPaid"
import Edit from "../Components/Buttons/Edit"
import Delete from "../Components/Buttons/Delete"

export default function InvoiceDetail( { invoices, deleteInvoice, updateStatus }) {

    const { id } = useParams()
    const navigate = useNavigate()
    const invoice = invoices.find(invoice => invoice.id === id)

    return (
        <section className="min-h-screen pt-8 bg-ghost-white md:px-10 lg:w-full lg:px-80 text-chinese-black">
            <div 
                onClick={() => navigate('/')}
                className="flex items-center justify-start max-w-3xl mx-6 mb-4 gap-x-4 md:mx-auto hover:text-ube">
                    <img src="/public/icon-arrow-left.svg" alt="arrow right icon" />
                    <p className="mt-1 font-bold">
                        Go back
                    </p>
            </div>

            {/* Invoice status header */}
            <div className="flex items-center justify-between h-24 max-w-3xl p-6 mx-6 bg-white rounded-lg shadow-sm md:mx-auto">
                <p className="tracking-tight text-grey-100 text-ube">
                    Status
                </p>
                <Status status={invoice.status}/>
                <div className="hidden ml-32 font-bold md:flex gap-x-2">
                    <Edit />
                    <Delete deleteInvoice={deleteInvoice} invoice={invoice}/>
                    <MarkAsPaid updateStatus={updateStatus} invoice={invoice}/>
                </div>
            </div>
            
            {/* Invoice header section - billing contact details etc. */}
            <div className="max-w-3xl p-6 mx-6 mt-4 bg-white rounded-lg shadow-sm md:mx-auto md:p-8">
                <div>

                    <div className="flex flex-col mb-10 gap-y-8 md:flex-row md:justify-between md:mb-5">
                        <div>
                            <p className="font-bold">
                                <span className="text-ube">#</span>
                                {invoice.id}
                                <span className="block mt-2 text-sm font-medium text-ube">
                                    {invoice.description}
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-ube md:text-right">
                                <span className="block">
                                    {invoice.senderAddress.street}
                                </span>
                                <span className="block">
                                    {invoice.senderAddress.city}
                                </span>
                                <span className="block">
                                    {invoice.senderAddress.postCode}
                                </span>
                                <span className="block">
                                    {invoice.senderAddress.country}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="md:flex md:gap-x-28">

                        <div className="flex mb-8 gap-x-16 md:gap-x-28">
                            <div className="flex flex-col gap-y-10">
                                <p className="font-bold">
                                    <span className="block mb-2 text-sm font-medium text-ube">
                                        Invoice Date
                                    </span>
                                    {invoice.createdAt}
                                </p>
                                <p className="font-bold">
                                    <span className="block mb-2 text-sm font-medium text-ube">
                                        Payment Due
                                    </span>
                                    {invoice.paymentDue}
                                </p>
                            </div>

                            <div>
                                <p className="font-bold">
                                    <span className="block mb-2 text-sm font-medium text-ube">
                                        Bill To
                                    </span>
                                    <span>
                                        {invoice.clientName}
                                    </span>
                                    <span className="block mt-2 text-sm font-medium text-ube">
                                        <span className="block">
                                            {invoice.clientAddress.street}
                                        </span>
                                        <span className="block">
                                            {invoice.clientAddress.city}
                                        </span>
                                        <span className="block">
                                            {invoice.clientAddress.postCode}
                                        </span>
                                        <span className="block">
                                            {invoice.clientAddress.country}
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                        
                        <div>
                            <p className="font-bold">
                                <span className="block mb-2 text-sm font-medium text-ube">
                                    Sent to
                                </span>
                                {invoice.clientEmail}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Invoice items breakdown and total price section */}
                <div>
                    <div className="flex flex-col p-6 mt-8 bg-gray-100 rounded-lg shadow-sm gap-y-6 md:p-8">

                        <div className="items-center justify-between hidden text-sm md:flex">
                            <p className="w-32 text-ube">
                                Item Name
                            </p>
                            <div className="flex gap-x-16">
                                <p className="w-4 text-ube">
                                    QTY.
                                </p>
                                <p className="w-20 text-ube">
                                    Price
                                </p>
                                <p className="w-20 text-ube">
                                    Total
                                </p>
                            </div>
                        </div>
                        
                        {/* Render an InvoiceItem component for each item found in the invoice.items array */}
                        {invoice.items.map(item => {
                            return <InvoiceItem key={item.name} name={item.name} quantity={item.quantity} price={item.price} total={item.total} />
                        })}

                    </div>
                    <div className="flex items-center justify-between p-6 text-white rounded-b-lg bg-light-navy md:p-8">
                        <p>
                            Grand Total
                        </p>
                        <p className="text-2xl font-bold">
                            ${invoice.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                    </div>
                </div>

            </div>

            <div className="flex items-center justify-center h-24 px-6 font-bold bg-white shadow-sm mt-14 gap-x-2 md:hidden">
                <Edit />
                <Delete deleteInvoice={deleteInvoice} invoice={invoice}/>
                <MarkAsPaid updateStatus={updateStatus} invoice={invoice}/>
            </div>

        </section>
    )
}