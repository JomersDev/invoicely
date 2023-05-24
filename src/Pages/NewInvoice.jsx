import { useForm } from "react-hook-form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function NewInvoice(props) {

  const [formData, setFormData] = useState({})

  const navigate = useNavigate()

  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
    setFormData(data)
  }
  
  return (
    <div className="w-full min-h-screen bg-green-100">
      <div
        onClick={() => navigate('/')}
        className="flex items-center justify-start gap-x-3">
          <img src="/icon-arrow-left.svg" alt="arrow right icon" />
          <p className="mt-1 font-bold cursor-pointer">
            Go back
          </p>
      </div>
      <h1>
        New Invoice
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-12">

          {/* Bill From Section */}
          <div className="flex flex-col gap-y-6">
            <h3 className="font-semibold text-violet">Bill From</h3>
            <div className="flex flex-col gap-y-2">
              <label className="block text-xs text-ube">Street Address</label>
              <input {...register("streetAddress")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
            </div>
            <div className="flex gap-x-8">
              <div className="flex flex-col gap-y-2">
                <label className="block text-xs text-ube">City</label>
                <input {...register("city")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="block text-xs text-ube">Post Code</label>
                <input {...register("postCode")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="block text-xs text-ube">Country</label>
              <input {...register("country")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
            </div>
          </div>

          {/* Bill To Section*/}
          <div className="flex flex-col gap-y-6">
            <h3 className="font-semibold text-violet">Bill To</h3>
            <div className="flex flex-col gap-y-2">
              <label className="block text-xs text-ube">Client's Name</label>
              <input {...register("clientName")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="block text-xs text-ube">Client's Email</label>
              <input {...register("clientEmail")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="block text-xs text-ube">Street Address</label>
              <input {...register("clientStreet")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
            </div>
            <div className="flex gap-x-8">
              <div className="flex flex-col gap-y-2">
                <label className="block text-xs text-ube">City</label>
                <input {...register("clientCity")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="block text-xs text-ube">Post Code</label>
                <input {...register("clientPostCode")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="block text-xs text-ube">Country</label>
              <input {...register("clientCountry")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
            </div>
          </div>

          {/* Invoice Terms Section */}
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label className="block text-xs text-ube">Invoice Date</label>
              <input type="date" {...register("invoiceDate")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="block text-xs text-ube">Payment Terms</label>
              <input defaultValue={30} {...register("paymentTerms")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="block text-xs text-ube">Project Description</label>
              <input {...register("description")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
            </div>
          </div>

          {/* Bill To Section*/}
          <div className="flex flex-col gap-y-6">
            <h3 className="font-semibold text-ube">Item List</h3>
              <div className="flex flex-col gap-y-2">
                <label className="block text-xs text-ube">Item Name</label>
                <input {...register("itemName")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
              </div>
              <div className="flex gap-x-2">
                <div className="flex flex-col gap-y-2">
                  <label className="block text-xs text-ube">Qty.</label>
                  <input defaultValue={1} {...register("quantity")} className="px-3 py-3 font-semibold border rounded-sm w-14"/>
                </div>
                <div className="flex flex-col gap-y-2">
                  <label className="block text-xs text-ube">Price</label>
                  <input {...register("price")} className="px-6 py-3 font-semibold border rounded-sm w-28"/>
                </div>
                <div>
                  <p className="block text-xs text-ube">Total</p>
                  <p className="text-ube">
                    {formData.price && (formData.quantity * formData.price)}
                  </p>
                </div>
              </div>
          </div>
          
          <input type="submit" />
      </form>
    </div>
  )
}