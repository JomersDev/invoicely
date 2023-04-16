import { useParams } from "react-router-dom"
import { useState } from "react"
import data from "../data"
import Status from "../Components/InvoiceDetails/Status"
import InvoiceItem from "../Components/InvoiceDetails/InvoiceItem"

export default function InvoiceDetail() {

    const { id } = useParams()

    const [invoice, setInvoice] = useState(data.find(invoice => invoice.id === id))

    console.log(invoice)
    return (
        <section className="min-h-screen px-6 pt-8 bg-ghost-white md:px-12 lg:w-full lg:px-80 text-chinese-black">
            
            <div className="flex items-center justify-between h-24 p-6 bg-white rounded-lg shadow-sm">
                <h1 className="tracking-tight text-grey-100 text-ube">
                    Status
                </h1>
                <Status status={invoice.status}/>
            </div>
            
            <div className="p-6 mt-4 bg-white rounded-lg shadow-sm">
                <div>

                    <div className="flex flex-col mb-10 gap-y-8">
                        <div>
                            <p className="font-bold">
                                <span className="text-ube">#</span>{invoice.id}
                                <span className="block text-sm font-medium text-ube">
                                    {invoice.description}
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-ube">
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

                    <div>

                        <div className="flex mb-8 gap-x-16">
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
                <div className="flex flex-col p-6 mt-8 bg-gray-100 rounded-lg shadow-sm gap-y-6">

                    {invoice.items.map(item => {
                        return <InvoiceItem key={item.name} name={item.name} quantity={item.quantity} price={item.price} total={item.total} />
                    })}

                </div>
                <div className="flex items-center justify-between p-6 text-white rounded-b-lg bg-light-navy">
                    <p>
                        Grand Total
                    </p>
                    <p className="text-2xl font-bold">
                        ${invoice.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                </div>
            </div>
        </section>
    )
}