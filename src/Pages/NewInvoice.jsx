import { useForm, useFieldArray } from "react-hook-form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import generateID  from '../utils/idgenerator'
import { add, parseISO, format } from 'date-fns'

export default function NewInvoice(props) {

  const [formData, setFormData] = useState({})
  
  // react router navigate hook
  const navigate = useNavigate()
  
  // react hook form setup
  const { register, control, handleSubmit } = useForm()
  const { fields, remove, append } = useFieldArray({
    control,
    name: "items"
  })

  const onSubmit = data => {
    console.log({...data, id: generateID(2, 1000, 10000), paymentDue: format(add(parseISO(data.createdAt), {days: data.paymentTerms}), 'yyyy/MM/dd'), status: 'pending'})
    setFormData({...data, id: generateID(2, 1000, 10000), status: 'pending'})
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
              <input {...register("senderAddress.street")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
            </div>
            <div className="flex gap-x-8">
              <div className="flex flex-col gap-y-2">
                <label className="block text-xs text-ube">City</label>
                <input {...register("senderAddress.city")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="block text-xs text-ube">Post Code</label>
                <input {...register("senderAddress.postCode")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="block text-xs text-ube">Country</label>
              <input {...register("senderAddress.country")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
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
              <input {...register("clientAddress.street")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
            </div>
            <div className="flex gap-x-8">
              <div className="flex flex-col gap-y-2">
                <label className="block text-xs text-ube">City</label>
                <input {...register("clientAddress.city")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="block text-xs text-ube">Post Code</label>
                <input {...register("clientAddress.postCode")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="block text-xs text-ube">Country</label>
              <input {...register("clientAddress.country")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
            </div>
          </div>

          {/* Invoice Terms Section */}
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <label className="block text-xs text-ube">Invoice Date</label>
              <input type="date" {...register("createdAt")} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
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

          {/* Items Section*/}
          <div className="flex flex-col gap-y-6">
            {fields.map(({ id, name, age }, index) => (
              <div key={id}> 
                 <div className="flex flex-col gap-y-2">
                  <label className="block text-xs text-ube">Item Name</label>
                  <input {...register(`items[${index}].name`)} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
                </div>
                <div>
                  <div className="flex flex-col gap-y-2">
                    <label className="block text-xs text-ube">Qty.</label>
                    <input {...register(`items[${index}].quantity`)} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label className="block text-xs text-ube">Price</label>
                    <input {...register(`items[${index}].price`)} className="w-full px-6 py-3 font-semibold border rounded-sm"/>
                  </div>
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button type="button" onClick={() => append({})}>
              + Add New Item
            </button>
          </div>
          
          <button type="submit">Save & Send</button>
      </form>
    </div>
  )
}
