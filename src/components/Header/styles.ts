import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
`

export const NewTransactionButton = styled.button`
  background-color: ${({ theme }) => theme['green-700']};
  color: ${({ theme }) => theme['gray-100']};
  font-weight: 700;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['green-500']};
    transition: background-color 0.3s;
  }
`
