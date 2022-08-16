import styled from 'styled-components'
import { CounterWrapper } from '@components/Counter/style'
import { Paragraph, CardPrice, HeadlineFour } from '@components/Typography'
import { devices } from '@constants/devices'

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: ${({theme}) => theme.colors.red.main };
  cursor: pointer;
  font-size: 12px;
  padding: 8px 0 0 16px;

  &:hover {
    color: ${({theme}) => theme.colors.green.main };
  }
`

export const OrderContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 726px;
  height: 546px;
  margin: 126px 0 68px;
  padding: 48px 64px 36px;

  background-color: ${({ theme }) => theme.colors.vanilla.light};
  box-shadow: 0px 8px 30px rgb(0 0 0 / 10%);
  border-radius: 16px;

  @media ${devices.laptop} {
    max-width: 100%;
  }

  @media ${devices.mobileL} {
    padding: 31px 24px 54px;
    height: 450px;
    margin: 80px 0 68px;
  }

  > ${HeadlineFour} {
    margin-bottom: 48px;

    @media ${devices.mobileL} {
      margin-bottom: 33px;
    }
  }

  > ${Paragraph} {
    position: absolute;
    bottom: 36px;
    right: 60px;

    @media ${devices.mobileL} {
      display: none;
    }
  }
`

export const OrderListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 278px;
  height: 100%;
  overflow-y: auto;
  width: 100%;
  padding-right: 8px;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  ::-webkit-scrollbar:vertical {
    width: 11px;
  }

  ::-webkit-scrollbar:horizontal {
    height: 11px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: ${({ theme }) => `2px solid ${theme.colors.vanilla.light}`};
    background-color: rgba(0, 0, 0, 0.5);
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.vanilla.light};
    border-radius: 8px;
  }
`

export const SingleOrderTextContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media ${devices.mobileL} {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;

    > ${Paragraph} {
      font-size: 14px;
    }
    > ${CardPrice} {
      font-size: 12px;
    }
  }
`
export const SingleOrderContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 10fr 1fr;
  grid-column-gap: 16px;
  align-items: center;
  height: 92px;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray.main}`};
  padding: 8px 0;

  @media ${devices.mobileL} {
    grid-column-gap: 5px;
    grid-template-columns: 1fr 3fr 1fr;

    > ${CounterWrapper} {
      grid-column: 3;
    }

    > ${SingleOrderTextContent} {
      grid-column: 2;
      grid-row: 1;
    }
  }

  > ${CardPrice} {
    text-align: end;
  }
`

export const EmptyCartMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  cursor: pointer;

  h1 {
    color: ${({theme}) => theme.colors.black.main}
  }

  p {
    color: ${({theme}) => theme.colors.green.dark}
  }
`