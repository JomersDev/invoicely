export default function Status({status}) {
    return (
        <p className={`px-6 py-2 font-bold w-32 text-center text-green-500 bg-green-100 rounded-md ${status === "pending" ? 'bg-orange-100 text-orange-500' : ''} ${status == 'draft' ? 'bg-gray-100 text-gray-500' : ''}`}>
            • {status}
        </p>
    )
}