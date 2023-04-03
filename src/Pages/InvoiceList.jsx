import React from "react";
import NewInvoiceBtn from "../Components/Buttons/NewInvoiceBtn";
import InvoiceCard from "../Components/InvoiceList/InvoiceCard";

export default function InvoiceList() {
    return (
        <section className="min-h-screen px-6 pt-8 bg-ghost-white md:px-12">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-chinese-black">
                        Invoices
                    </h1>
                    <p className="text-cool-grey ">
                        7 Invoices
                    </p>
                </div>
                <div className="flex gap-x-5">
                    <div className="flex items-center gap-x-3">
                        <p className="font-bold text-chinese-black">Filter</p>
                        <img src="/icon-arrow-down.svg" alt="down arrow" />
                    </div>
                    <NewInvoiceBtn />
                </div>
            </div>
            <div className="flex flex-col mt-8 gap-y-4 md:mt-14">
                <InvoiceCard />
                <InvoiceCard />
                <InvoiceCard />
                <InvoiceCard />
            </div>
        </section>
    )
}