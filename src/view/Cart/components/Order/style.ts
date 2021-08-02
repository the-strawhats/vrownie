import styled from 'styled-components'
import { CounterWrapper } from '../../../../components/Counter/style'
import { ImageWrapper } from '../../../../components/Image/style'
import { CardPrice, HeadlineFour } from '../../../../components/Typography'

interface OrderContainerInterface {}

export const OrderContainer = styled.div<OrderContainerInterface>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 726px;
  height: 546px;
  margin-top: 126px;
  padding: 48px 64px 36px;

  background-color: ${({ theme }) => theme.colors.vanilla.light};
  box-shadow: -4px 16px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  > ${HeadlineFour} {
    margin-bottom: 48px;
  }
`

export const SingleOrderContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  grid-column-gap: 24px;
  align-items: center;
  height: 92px;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray.main}`};

  > ${CardPrice} {
    text-align: end;
  }
`
