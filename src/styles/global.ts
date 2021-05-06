import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'M PLUS 1p', sans-serif;
    background: ${({ theme }) => theme.colors.red.one};
    color: ${({ theme }) => theme.colors.vanilla.one};
  }
`
