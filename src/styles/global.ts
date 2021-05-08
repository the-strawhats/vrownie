import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'M PLUS 1p', sans-serif;
  }

  *:focus {
    outline: none;
}

  body {
    background: ${({ theme }) => theme.colors.vanilla.main};
  }
`
