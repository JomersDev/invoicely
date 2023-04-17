export default function Status({status}) {

    function getStatusColor(status) {
        if (status === 'pending') {
            return 'bg-orange-100 text-orange-500'
        } else if(status ==='paid') {
            return 'text-green-500 bg-green-100'
        } else {
            return 'bg-gray-200 text-gray-600'
        }
    }

    return (
        <p className={`px-6 py-2 font-bold w-32 text-center rounded-md ${getStatusColor(status)}`}>
            • {status}
        </p>
    )
}