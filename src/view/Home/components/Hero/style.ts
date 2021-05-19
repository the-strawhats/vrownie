import styled from 'styled-components'
import { IconContainer } from '../../../../components/Icon/style'
import { ImageWrapper } from '../../../../components/Image/style'
import { ParallaxContainer } from '../../../../components/Parallax/style'
import { BodyOne, HeadlineOne } from '../../../../components/Typography'
import { devices } from '../../../../constants/devices'

interface HeroContainerInterface {}

export const HeroContainer = styled.div<HeroContainerInterface>`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 126px;
  min-height: calc(100vh - 120px);

  @media ${devices.tablet} {
    padding-top: 72px;
  }

  @media ${devices.mobileM} {
  min-height: calc(100vh - 72px);
  }

  > ${ImageWrapper} {
    position: absolute;
    display: none;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    height: 100vh;
    width: 100vw;
    z-index: -1;
    @media ${devices.mobileM} {
      display: block;
    }
  }

  > ${IconContainer} {
    position: absolute;
    top: -120px;
    right: -155px;
    z-index: -1;

    > svg {
      height: 100vh;
    }

    @media ${devices.laptopL} {
      right: -275px;

      > svg {
        height: 900px;
      }
    }

    @media ${devices.laptop} {
      right: -80px;
    }

    @media ${devices.tablet} {
      display: none;
    }
  }
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
