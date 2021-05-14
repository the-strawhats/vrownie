import styled from 'styled-components'
import { HeadlineOne } from '../../components/Typography'
import { devices } from '../../constants/devices'

export const Container = styled.div`
  min-height: 150vh;

  > ${HeadlineOne} {
    max-width: 453px;

    @media ${devices.tablet} {
      max-width: 272px;
    }
  }
`
