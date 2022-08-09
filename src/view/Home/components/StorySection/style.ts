import styled from 'styled-components'
import { ImageWrapper } from '@components/Image/style'
import { Paragraph, HeadlineTwo } from '@components/Typography'
import { devices } from '@constants/devices'
import { AnimatedElementInterface } from '@interface/index'

export const StorySectionContainer = styled.div<AnimatedElementInterface>`
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
    opacity: ${({ isAnimated }) => (isAnimated ? 1 : 0)};
    transform: ${({ isAnimated }) =>
      isAnimated ? 'translateX(0px)' : 'translateX(-100px)'};
    transition: all ease 0.8s;

    @media ${devices.laptopL} {
      left: 0px;
    }

    @media ${devices.laptop} {
      position: static;
      margin-bottom: 32px;
      left: 0;
    }
  }

  > ${HeadlineTwo} {
    margin-bottom: 22px;
    opacity: ${({ isAnimated }) => (isAnimated ? 1 : 0)};
    transition: opacity ease-in 0.4s;
  }
`

export const StorySectionText = styled.div<AnimatedElementInterface>`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  text-align: justify;

  @media ${devices.laptop} {
    justify-content: center;
  }

  > ${Paragraph} {
    max-width: 545px;
    margin-bottom: 104px;
    padding-right: 60px;
    opacity: ${({ isAnimated }) => (isAnimated ? 1 : 0)};
    transform: ${({ isAnimated }) =>
      isAnimated ? 'translateX(0px)' : 'translateX(-100px)'};
    transition: ease 0.6s;
    transition-property: transform opacity;
    transition-delay: 0.3s, 0.3s;

    @media ${devices.mobileL} {
      padding-left: 64px;
      padding-right: 64px;
    }

    @media ${devices.laptop} {
      margin-bottom: 64px;
      padding-right: 0px;
    }

    @media ${devices.laptopL} {
      max-width: 650px;
    }
  }
`
