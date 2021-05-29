import styled from 'styled-components'
import { IconContainer } from '../../../../components/Icon/style'
import { ImageWrapper } from '../../../../components/Image/style'
import { BodyOne, HeadlineTwo } from '../../../../components/Typography'
import { devices } from '../../../../constants/devices'

export const ProductsSectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 146px;
  min-height: 100vh;

  > ${HeadlineTwo} {
    margin-bottom: 8px;
  }

  > ${BodyOne} {
    text-align: center;
    margin-bottom: 62px;
    max-width: 775px;
  }

  > ${IconContainer} {
    position: absolute;
    z-index: -1;
    display: none;

    @media ${devices.mobileM} {
      display: block;
    }

    :nth-child(1) {
      top: 218px;
      right: -32px;
    }

    :nth-child(2) {
      top: 703px;
      left: -32px;
    }

    :nth-child(3) {
      top: 1005px;
      right: -32px;
    }
  }

  > ${ImageWrapper} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 100vh;
    width: 100vw;
    z-index: -1;

    @media ${devices.mobileM} {
      display: none;
    }

    > div {
      height: 100vh;
      width: 100vw;
    }
  }
`

export const ProductsContent = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto;
  grid-column-gap: 58px;
  grid-template-rows: auto auto;
  grid-row-gap: 40px;
  width: 100%;

  @media ${devices.tablet} {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
  }

  @media ${devices.mobileL} {
    grid-template-columns: auto;
    grid-template-rows: auto;
    padding-bottom: 32px;
  }
`
