import styled from 'styled-components'
import { BodyOne, HeadlineTwo } from '../../../../components/Typography'
import { devices } from '../../../../constants/devices'

export const ProductsSectionContainer = styled.div`
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
