import React from "react";

export default function InvoiceCard({id, paymentDue, clientName, total, status}) {

    const [year, month, day] = paymentDue.split('-')
    let date = new Date(+year, +month - 1, +day)
    const textFormatMonth = date.toLocaleString('default', { month: 'short' });
    const formattedDate = `${day} ${textFormatMonth} ${year}`

    return (
        <div className="flex items-center justify-between w-full max-w-3xl p-6 bg-white rounded-lg shadow-sm text-chinese-black md:py-4">
            <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-6">
                <p className="w-20 font-bold">
                    <span className="text-ube">#</span>{id}
                </p>
                <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-12">
                    <p className="text-sm w-28 text-ube">
                        Due {formattedDate}
                    </p>
                    <div>
                        <p className="font-bold md:hidden">
                            ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                        <p className="hidden text-sm text-left w-28 text-ube md:block">
                            {clientName}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end gap-y-9 md:flex-row md:items-center md:gap-x-10">
                <div>
                    <p className="text-sm text-ube md:hidden">
                        {clientName}
                    </p>
                    <p className="hidden font-bold md:block">
                        ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                </div>
                <p className={`px-6 py-2 font-bold w-32 text-center text-green-500 bg-green-100 rounded-md ${status === "pending" ? 'bg-orange-100 text-orange-500' : ''} ${status == 'draft' ? 'bg-gray-50 text-gray-700' : ''}`}>
                    • {status}
                </p>
            </div>
        </div>
    )
}

//${status === "pending" ? 'bg-orange-100 text-orange-500' : ''}