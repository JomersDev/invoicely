import { useParams } from "react-router-dom"
import { useState } from "react"
import data from "../data"

export default function InvoiceDetail() {

    const { id } = useParams()

    const [invoice, setInvoice] = useState(data.find(invoice => invoice.id === id))

    console.log(invoice)
    return (
        <section>
            <div>
                <h1>Test link</h1>
            </div>
        </section>
    )
}