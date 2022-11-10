import styled from 'styled-components'

export const SearchContainer = styled.form`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  margin-top: 4rem;

  input {
    flex: 1;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-100']};
    padding: 1rem;
    outline: none;
    box-shadow: none;
    border: none;
    border-radius: 8px;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1.5rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme['green-300']};
    border-radius: 8px;
    color: ${({ theme }) => theme['green-300']};
    cursor: pointer;
    transition: all 0.2s;

    span {
      font-size: 1rem;
      font-weight: 700;
    }

    &:hover {
      box-shadow: 0 0 8px ${({ theme }) => theme['green-500']};
      filter: saturate(1.4);
      /*background-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme['gray-300']};*/
    }
  }
`
