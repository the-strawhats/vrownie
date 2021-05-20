import styled from 'styled-components'
import { CardTitle, Caption } from '../Typography'

interface AnimatedElementInterface {
  isAnimated: boolean
  transitionDuration: number
}

export const CardContainer = styled.div<AnimatedElementInterface>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px 22px 10px 24px;
  width: 260px;
  min-height: 200px;
  background: ${({ theme }) => theme.colors.vanilla.light};
  box-shadow: -4px 8px 8px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  transition: all ease 0.5s;
  opacity: ${({ isAnimated }) => (isAnimated ? '1' : '0')};
  /* transition-delay: ${({ transitionDuration }) => `${transitionDuration * 0.25}s`}; */
  transition-duration: ${({ transitionDuration }) => `${transitionDuration}s`};

  :hover {
    transform: scaleY(1.03) scaleX(1.03);
  }
`

export const CardInformationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 91px;
`
export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 112px;

  ${CardTitle}, ${Caption} {
    padding-bottom: 4px;
  }
`

export const CardButton = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  background: ${({ theme }) => theme.colors.green.main};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.vanilla.light};
  font-size: 24px;
  cursor: pointer;
`
