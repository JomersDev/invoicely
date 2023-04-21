import { useForm } from "react-hook-form";
import { useState } from "react";

export default function NewInvoiceForm(props) {

    const [formData, setFormData] = useState([])

    const { register, handleSubmit } = useForm();
    function onSubmit(data) {
        setFormData(data)
    }
    console.log(formData)

    return (
        <div className="min-h-screen bg-white">
            <div 
                onClick={props.handleShowNewInvoice}
                className="flex items-center justify-start gap-x-3">
                    <img src="/icon-arrow-left.svg" alt="arrow right icon" />
                    <p className="mt-1 font-bold cursor-pointer">
                        Go 
                    </p>
            </div>
            <h1>
                New Invoice
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} />
                
                <input {...register("lastName")} />
                
                <input type="submit" />
            </form>
            <h1>{formData.firstName}</h1>
        </div>
    )
}