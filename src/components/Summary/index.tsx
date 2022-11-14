import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { formattedMoney } from '../../utils/formatter'

import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const summary = useSummary()

  return (
    <div>
      <SummaryContainer>
        <SummaryCard>
          <header>
            <span>Entradas</span>
            <ArrowCircleDown size={32} color="#00b37e" />
          </header>
          <strong>{formattedMoney(summary.income)}</strong>
        </SummaryCard>

        <SummaryCard>
          <header>
            <span>Saídas</span>
            <ArrowCircleUp size={32} color="#f75a68" />
          </header>
          <strong>{formattedMoney(summary.outcome)}</strong>
        </SummaryCard>

        <SummaryCard variant="green">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </header>
          <strong>{formattedMoney(summary.total)}</strong>
        </SummaryCard>
      </SummaryContainer>
    </div>
  )
}
