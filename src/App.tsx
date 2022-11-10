import { TransactionProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'

function App() {
  return (
    <div>
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </div>
  )
}

export default App
