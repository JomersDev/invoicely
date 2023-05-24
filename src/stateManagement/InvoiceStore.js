import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useInvoiceStore = create(
  persist(
    (set) => (
      {
        invoices: [],
        fetchInvoices: async () => {
          fetch('http://localhost:4000/api/invoices')
            .then(response => response.json())
            .then(data => set({invoices: data}))
        },
        deleteInvoice: (id) => set((state) => ({invoices: state.invoices.filter(invoice => invoice._id !== id)})),
        updateInvoice: (id) => set((state) => ({invoices: state.invoices.map(invoice => {
          if (invoice._id === id) {
            return {...invoice, status: 'paid'}
          } else {
            return invoice
          }
        })}))
      }
    ),
    {
      name: 'invoice-storage'
    }
  )
)
