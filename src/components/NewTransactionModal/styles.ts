import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  animation-duration: 0.5s;
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme['gray-500']};
  line-height: 0;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
  }
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  position: fixed;
  border-radius: 6px;
  padding: 2.5rem 3rem;

  background-color: ${({ theme }) => theme['gray-800']};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 0.5s;

  form {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    input {
      width: 100%;
      background-color: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme['gray-300']};
      padding: 1rem;
      border-radius: 6px;
      border: 0;

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
      }
    }

    button[type='submit'] {
      margin-top: 1.5rem;
      width: 100%;
      height: 58px;
      border: 0;
      border-radius: 6px;
      font-weight: bold;
      letter-spacing: 1px;
      background-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${({ theme }) => theme['green-700']};
        transition: all 0.2s;
      }
    }
  }
`

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  width: 100%;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`
interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  background-color: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['gray-600']};
    transition: background 0.2s;
  }

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='checked'] {
    box-shadow: none;
    color: ${({ theme }) => theme['gray-100']};
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${({ theme }) => theme['gray-100']};
    }
  }
`
