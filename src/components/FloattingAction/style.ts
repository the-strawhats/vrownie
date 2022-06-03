import { ButtonContainer } from '@components/Button/style'
import { devices } from '@constants/devices'
import styled from 'styled-components'

export const FloatingActionWrapper = styled.div`
  display: none;

  @media ${devices.mobileL} {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 0 16px;
    bottom: 0px;
    left: 0px;
    width: 100vw;
    height: 100px;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.vanilla.light};
    box-shadow: 0px -8px 10px rgb(0 0 0 / 8%);

    > ${ButtonContainer} {
      width: 100%;
    }
  }
`
