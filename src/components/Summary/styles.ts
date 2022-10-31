import styled, { css } from 'styled-components'

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  padding: 0 10rem;
  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${({ theme }) => theme['gray-700']};
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border-radius: 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1.125rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${props.theme['green-700']};
    `}
`
