import { useNavigate } from "react-router-dom"

export default function NewInvoiceBtn() {

  const navigate = useNavigate()

  return (
    <button 
      onClick={() => navigate('/create')}
      className="flex items-center justify-center w-24 h-12 font-bold text-white bg-violet gap-x-2 rounded-3xl md:w-36">
        <img 
          className="p-3 -ml-2 bg-white rounded-full"
          src="/icon-plus.svg" 
          alt="plus icon" />
        <p className="tracking-tight">
          New <span className="hidden md:inline-block">Invoice</span>
        </p>
    </button>
  )
}