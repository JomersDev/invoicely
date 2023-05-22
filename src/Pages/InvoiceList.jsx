//import { useState } from "react";
import NewInvoiceBtn from "../Components/Buttons/NewInvoiceBtn";
import InvoiceCard from "../Components/InvoiceList/InvoiceCard";
import Empty from "../Components/InvoiceList/Empty";
import NewInvoice from "../Components/InvoiceList/NewInvoice";

import { useInvoiceStore } from '../stateManagement/InvoiceStore'

export default function InvoiceList(props) {

    const invoices = useInvoiceStore(state => state.invoices)

    return (
            <section className="min-h-screen px-6 pt-8 bg-ghost-white md:px-12 lg:w-full lg:px-80">
                <div className="flex items-center justify-between max-w-3xl mx-auto">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tighter text-chinese-black md:text-4xl">
                            Invoices
                        </h1>
                        <p className="tracking-tight text-cool-grey">
                            <span className="hidden md:inline-block">There are </span> length <span className="hidden md:inline-block">total </span> Invoices
                        </p>
                    </div>
                    <div className="relative flex gap-x-5">
                        <div className="flex items-center gap-x-3">
                            <p className="font-bold tracking-tight text-chinese-black">
                                Filter <span className="hidden md:inline-block">by status</span>
                            </p>
                            <img src="/icon-arrow-down.svg" alt="down arrow" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-8 gap-y-4 md:mt-14">
                    {invoices.length === 0 ? <Empty/> :
                        <>
                            {invoices.map(invoice => {
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
            </section>

    )
}
