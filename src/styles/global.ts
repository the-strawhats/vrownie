import styled, { createGlobalStyle } from 'styled-components'
import { devices } from '@constants/devices'

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

export const Container = styled.div`
  padding: 0 155px;

  @media ${devices.laptopL} {
    padding: 0 275px;
  }

  @media ${devices.laptop} {
    padding: 0 80px;
  }

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 32px;
  }
`
