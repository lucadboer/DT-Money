import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: ${(props) => props.theme['gray-800']};
  color: ${({ theme }) => theme['gray-100']};
}
body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;

  :focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
}
}
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}
`
