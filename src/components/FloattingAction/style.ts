import { ButtonContainer } from '@components/Button/style'
import { Paragraph } from '@components/Typography'
import { devices } from '@constants/devices'
import styled from 'styled-components'

export const FloatingActionWrapper = styled.div`
  display: none;

  @media ${devices.mobileL} {
    display: flex;
    flex-direction: column;
    position: fixed;
    padding: 0 16px;
    bottom: 0px;
    left: 0px;
    width: 100vw;
    height: 120px;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.vanilla.light};
    box-shadow: 0px -8px 10px rgb(0 0 0 / 8%);
    padding-bottom: 20px;

    > ${ButtonContainer} {
      width: 100%;
    }

    > ${Paragraph} {
      padding: 16px 0;
      display: flex;
      justify-content: space-between;
    }
  }
`
