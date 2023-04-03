import React from "react";

export default function NewInvoiceBtn() {
    return (
        <button className="flex items-center justify-center w-24 h-12 font-bold text-white bg-violet gap-x-2 rounded-3xl">
            <img 
                className="p-3 -ml-2 bg-white rounded-full"
                src="/icon-plus.svg" 
                alt="plus icon" />
            <p>New</p>
        </button>
    )
}