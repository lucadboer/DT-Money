import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer } from './styles'
import { useContext } from 'react'
import { TransactionContext } from '../../../../contexts/TransactionsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
  const { fetchTransactions } = useContext(TransactionContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <div>
      <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
        <input
          required
          placeholder="Busque por transações"
          type="text"
          {...register('query')}
        />
        <button disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
          <span>Buscar</span>
        </button>
      </SearchFormContainer>
    </div>
  )
}
