import React from "react";

export default function InvoiceCard() {
    return (
        <div className="flex items-center justify-between w-full max-w-3xl p-6 bg-white rounded-lg shadow-sm text-chinese-black md:py-4">
            <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-6">
                <p className="font-bold">
                    <span className="text-ube">#</span>RT3080
                </p>
                <div className="flex flex-col gap-y-2 md:flex-row md:items-center md:gap-x-12">
                    <p className="text-sm text-ube">
                        Due 19 Aug 2021
                    </p>
                    <div>
                        <p className="font-bold md:hidden">
                            $1,800.90
                        </p>
                        <p className="hidden text-sm text-ube md:block">
                            Jensen Huang
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end gap-y-9 md:flex-row md:items-center md:gap-x-10">
                <div>
                    <p className="text-sm text-ube md:hidden">
                        Jensen Huang
                    </p>
                    <p className="font-bold md:block">
                        $1,800.90
                    </p>
                </div>
                <p className="px-6 py-2 font-bold text-center text-green-500 bg-green-100 rounded-md">
                    • Paid
                </p>
            </div>
        </div>
    )
}