export default function Empty() {
    return (
        <div className="mt-20">
            <div className="flex justify-center">
                <img src="/public/illustration-empty.svg" alt="empty graphic" />
            </div>
            <h1 className="mt-10 text-2xl font-bold text-center text-chinese-black">
                There is nothing here
            </h1>
            <p className="max-w-[12rem] mt-6 text-sm text-center text-ube mx-auto">
                Create an invoice by clicking the New button and get started
            </p>
        </div>
    )
}