import styled from 'styled-components'
import { devices } from '@constants/devices'
import { Paragraph } from '@components/Typography'

interface ButtonContainerInterface {
  fixed: boolean
  isDisabled: boolean
}

export const ButtonContainer = styled.button<ButtonContainerInterface>`
  border-radius: 8px;
  border: none;
  padding: 18px 24px;
  background: ${({ theme }) => theme.colors.green.dark};
  border-radius: 8px;
  width: ${({ fixed }) => (fixed ? '100%' : 'fit-content')};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.3 : 1)};
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
  transition: all ease 0.3s;

  :hover {
    transform: translateY(3px);
  }

  @media ${devices.mobileL} {
    padding: ${({ fixed }) => (fixed ? '16px' : '12px 18px')};

    > ${Paragraph} {
      font-size: ${({ fixed }) => (fixed ? '24px' : '16px')};
    }
  }
`
