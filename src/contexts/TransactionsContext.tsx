import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../libs/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createNewTransaction: (data: Transaction) => void
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetchTransactions()
  }, [])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createNewTransaction(data: Transaction) {
    const { description, type, category, price } = data

    await api.post('transactions', {
      description,
      type,
      category,
      price,
      createdAt: new Date(),
    })

    setTransactions((state) => {})
  }

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
