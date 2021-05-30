import styled, { keyframes } from 'styled-components'
import { ButtonContainer } from '../../../../components/Button/style'
import { IconContainer } from '../../../../components/Icon/style'
import { ImageWrapper } from '../../../../components/Image/style'
import { ParallaxContainer } from '../../../../components/Parallax/style'
import { BodyOne, HeadlineOne } from '../../../../components/Typography'
import { devices } from '../../../../constants/devices'

const HeroTextContentAnimation = keyframes` 
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`

const elementsBeforeAnimation = keyframes` 
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const buttonMobileAnimation = keyframes` 
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const HeroContainer = styled.div`
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

export const HeroTextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 453px;

  > ${HeadlineOne} {
    position: relative;
    margin-bottom: 16px;
    animation-name: ${HeroTextContentAnimation};
    animation-duration: 0.6s;
    animation-delay: 0.3s;

    ::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      height: 100%;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.vanilla.main};
      animation-name: ${elementsBeforeAnimation};
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
  }

  > ${BodyOne} {
    position: relative;
    margin-bottom: 24px;
    animation-name: ${HeroTextContentAnimation};
    animation-duration: 0.8s;
    animation-delay: 0.3s;

    ::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      height: 100%;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.vanilla.main};
      animation-name: ${elementsBeforeAnimation};
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
  }

  > span {
    position: relative;
    display: flex;
    margin-bottom: 10px;
    animation-name: ${HeroTextContentAnimation};
    animation-duration: 0.6s;
    animation-delay: 0.3s;

    ::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      height: 100%;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.vanilla.main};
      animation-name: ${elementsBeforeAnimation};
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }

    ${IconContainer} {
      margin-right: 8px;
    }
  }

  > ${ButtonContainer} {
    position: relative;
    animation-name: ${HeroTextContentAnimation};
    animation-duration: 1s;
    animation-delay: 0.3s;

    @media ${devices.mobileM} {
      animation-name: ${buttonMobileAnimation};
      animation-duration: 1s;
      animation-delay: 0s;
    }

    ::before {
      position: absolute;
      top: -1px;
      left: -7px;
      content: '';
      height: 82px;
      width: 210px;
      background-color: ${({ theme }) => theme.colors.vanilla.main};
      animation-name: ${elementsBeforeAnimation};
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;

      @media ${devices.mobileM} {
        display: none;
      }
    }
  }

  @media ${devices.mobileL} {
    max-width: 272px;
  }
`

export const HeroImageContent = styled.div`
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
