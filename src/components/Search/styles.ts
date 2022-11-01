import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  min-width: 957px;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0 10rem;
  margin-top: 4rem;

  input {
    width: 70rem;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-100']};
    padding: 1rem;
    outline: none;
    box-shadow: none;
    border: none;
    border-radius: 8px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 2rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme['green-500']};
    border-radius: 8px;
    color: ${({ theme }) => theme['green-500']};
    cursor: pointer;
    transition: all 0.2s;

    span {
      font-size: 1rem;
      font-weight: 700;
    }

    &:hover {
      box-shadow: 0 0 9px ${({ theme }) => theme['green-500']};
      /*background-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme['gray-300']};*/
    }
  }
`
