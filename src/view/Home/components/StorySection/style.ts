import styled from 'styled-components'
import { ImageWrapper } from '../../../../components/Image/style'
import { BodyOne, HeadlineTwo } from '../../../../components/Typography'
import { devices } from '../../../../constants/devices'

export const StorySectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 146px;

  ::before {
    position: absolute;
    content: '';
    width: 650px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.green.main};
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;

    @media ${devices.tablet} {
      width: 280px;
    }
  }

  > ${ImageWrapper} {
    position: absolute;
    left: 60px;
    z-index: -1;

    @media ${devices.laptop} {
      position: static;
      margin-bottom: 32px;
      left: 0;
    }
  }

  > ${HeadlineTwo} {
    margin-bottom: 22px;
  }
`

export const StorySectionText = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media ${devices.laptop} {
    justify-content: center;
  }

  > ${BodyOne} {
    max-width: 500px;
    margin-bottom: 104px;
    padding-right: 60px;

    @media ${devices.laptop} {
      margin-bottom: 64px;
      padding-right: 0px;
    }
  }
`
