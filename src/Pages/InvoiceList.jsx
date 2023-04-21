import { useState } from "react";
import NewInvoiceBtn from "../Components/Buttons/NewInvoiceBtn";
import InvoiceCard from "../Components/InvoiceList/InvoiceCard";
import Empty from "../Components/InvoiceList/Empty";
import NewInvoiceForm from "../Components/InvoiceList/NewInvoiceForm";

export default function InvoiceList(props) {

    const [showNewInvoice, setShowNewInvoice] = useState(false)

    function handleShowNewInvoice() {
        setShowNewInvoice(prev => !prev)
    }

    return (
        <section className="min-h-screen px-6 pt-8 bg-ghost-white md:px-12 lg:w-full lg:px-80">
            {showNewInvoice ? <NewInvoiceForm handleShowNewInvoice={handleShowNewInvoice}/>
            :
            <div>
                <div className="flex items-center justify-between max-w-3xl mx-auto">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tighter text-chinese-black md:text-4xl">
                            Invoices
                        </h1>
                        <p className="tracking-tight text-cool-grey">
                            <span className="hidden md:inline-block">There are </span> {props.invoices.length} <span className="hidden md:inline-block">total </span> Invoices
                        </p>
                    </div>
                    <div className="relative flex gap-x-5">
                        <div className="flex items-center gap-x-3">
                            <p className="font-bold tracking-tight text-chinese-black">
                                Filter <span className="hidden md:inline-block">by status</span>
                            </p>
                            <img src="/icon-arrow-down.svg" alt="down arrow" />
                        </div>
                        <NewInvoiceBtn addInvoice={props.addInvoice} handleShowNewInvoice={handleShowNewInvoice}/>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-8 gap-y-4 md:mt-14">
                    {props.invoices.length === 0 ? <Empty/> :
                        <>
                            {props.invoices.map(invoice => {
                                return <InvoiceCard 
                                            key={invoice.id} 
                                            id={invoice.id}
                                            paymentDue={invoice.paymentDue}
                                            clientName={invoice.clientName}
                                            total={invoice.total}
                                            status={invoice.status}
                                        />
                            })}
                        </>
                    }
                </div>
            </div>
            }
        </section>
    )
}