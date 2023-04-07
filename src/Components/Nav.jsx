import React from "react";

export default function Test() {

    return (
        <nav className="flex items-center justify-between h-16 overflow-hidden bg-light-navy lg:flex-col lg:h-screen lg:w-24 lg:rounded-r-3xl lg:fixed">
            <div className="p-6 bg-violet rounded-r-3xl lg:w-full">
                <img src="/logo.svg" className="lg:h-10"/>
            </div>
            <div className="flex items-center pr-6 gap-x-12 md:pr-8 md:gap-x-16 lg:flex-col gap-y-14 lg:pr-0 lg:pb-6">
                <div>
                    <img src="/icon-moon.svg" />
                </div>
                <div>
                    <img src="/image-avatar.jpg" className="h-8 rounded-full lg:h-10"/>
                </div>
            </div>
        </nav>
    )
}