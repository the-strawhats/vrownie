import styled from 'styled-components'
import { IconContainer } from '../../../../components/Icon/style'
import { ParallaxContainer } from '../../../../components/Parallax/style'
import { BodyOne, HeadlineOne } from '../../../../components/Typography'
import { devices } from '../../../../constants/devices'

interface HeroContainerInterface {}

export const HeroContainer = styled.div<HeroContainerInterface>`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 126px;
`

export const HeroTextContent = styled.div<HeroContainerInterface>`
  display: flex;
  flex-direction: column;
  max-width: 453px;

  > ${HeadlineOne} {
    margin-bottom: 16px;
  }

  > ${BodyOne} {
    :first-of-type {
      margin-bottom: 10px;
    }
    :last-of-type {
      margin-bottom: 24px;
    }
  }

  > span {
    display: flex;

    ${IconContainer} {
      margin-right: 8px;
    }
  }

  @media ${devices.mobileL} {
    max-width: 272px;
  }
`

export const HeroImageContent = styled.div<HeroContainerInterface>`
  position: absolute;
  top: 126px;
  right: -72px;

  @media ${devices.laptop} {
    > ${ParallaxContainer} {
      width: 480px;
      height: 339px;
    }
  }

  @media ${devices.tablet} {
    display: none;
  }
`
