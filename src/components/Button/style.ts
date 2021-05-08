import styled from 'styled-components'
import { devices } from '../../constants/devices'
import { BodyOne } from '../Typography'

interface ButtonContainerInterface {
  fixed: boolean
}

export const ButtonContainer = styled.button<ButtonContainerInterface>`
  border-radius: 8px;
  border: none;
  padding: 18px 24px;
  background: ${({ theme }) => theme.colors.green.dark};
  box-shadow: ${({ theme }) => `-4px 8px 4px ${theme.colors.green.dark}36`};
  border-radius: 8px;
  width: ${({ fixed }) => fixed && '100%'};
  cursor: pointer;
  transition: all ease 0.3s;

  :hover {
    transform: translateY(3px);
  }

  @media ${devices.tablet} {
    padding: ${({ fixed }) => (fixed ? '16px' : '12px 18px')};

    > ${BodyOne} {
      font-size: ${({ fixed }) => (fixed ? '24px' : '16px')};
    }
  }
`