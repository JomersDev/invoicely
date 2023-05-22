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
        }
      }
    ),
    {
      name: 'invoice-storage'
    }
  )
)