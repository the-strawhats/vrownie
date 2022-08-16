import styled, { keyframes } from 'styled-components'
import { IconContainer } from '@components/Icon/style'
import { Paragraph } from '@components/Typography'
import { devices } from '@constants/devices'

interface AnimatedElementInterface {
  isAnimated?: boolean
  isCartActive?: boolean
  cartAmount?: number
}

const navAnimation = keyframes`
  from {
    transform: translateY(-25%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`
export const IconActionWrapper = styled.div`
  display: inline;
  cursor: pointer;
`

export const LogoActionWrapper = styled.div`
  display: inline;
`

export const NavContainer = styled.nav<AnimatedElementInterface>`
  position: relative;
  display: flex;
  padding: 40px;
  align-items: center;
  animation: ${navAnimation} 0.5s;

  > ${LogoActionWrapper} {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all cubic-bezier(0.69, 0.01, 0.25, 1) 0.5s;
    transform: ${({ isAnimated }) =>
    isAnimated
      ? 'translateX(-50%) translateY(-128px)'
      : 'translateX(-50%) translateY(-50%)'};

    @media ${devices.mobileM} {
      width: 115px;
      height: 54px;
    }
  }

  @media ${devices.mobileM} {
    padding: 24px;
  }
`
export const Navlist = styled.div<AnimatedElementInterface>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all cubic-bezier(0.69, 0.01, 0.25, 1) 0.3s;
  transform: ${({ isAnimated }) =>
    isAnimated ? 'translateY(-80px)' : 'translateY(0px)'};

  > ${IconActionWrapper} {
    margin-right: 75px;

    @media ${devices.laptop} {
      margin-right: 24px;
    }

    @media ${devices.mobileM} {
      width: 24px;
      height: 24px;
      margin-right: 40px;
    }
  }

  > ul {
    display: flex;
    list-style: none;

    > li {
      margin-right: 40px;
      cursor: pointer;

      @media ${devices.laptop} {
        margin-right: 20px;
      }

      > ${Paragraph} {
        transition: all cubic-bezier(0.69, 0.01, 0.25, 1) 0.3s;
        @media ${devices.laptop} {
          font-size: 18px;
        }
        :hover {
          color: ${({ theme }) => theme.colors.green.dark};
        }
      }
    }

    @media ${devices.tablet} {
      display: none;
    }
  }
`

export const NavShopButton = styled.button<AnimatedElementInterface>`
  top: calc(100vh - 136px);
  right: 40px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 55px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.green.dark};
  border: none;
  cursor: pointer;
  z-index: 1;

  :hover {
    background-color: ${({ theme }) => theme.colors.green.main};
  }

  @media ${devices.mobileM} {
    right: 20px;
  }
`

export const NavShopButtonContent = styled.div<AnimatedElementInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;

  &::before {
    position: absolute;
    top: 0px;
    right: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    opacity: ${({ isCartActive }) => (isCartActive ? 1 : 0)};
    background-color: ${({ theme }) => theme.colors.red.main};
    transition: all ease 0.3s;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.vanilla.main};
    content: '${({ cartAmount }) => (cartAmount ? cartAmount : '0')}';
  }
`

export const NavWhatsappButtonTooltip = styled.span`
  width: 150px;
  background-color: rgba(0,0,0, 80%);
  
  color: #fff;
  text-align: center;
  padding: 8px;
  border-radius: 6px;
  left: -160px;
 
  position: absolute;
  z-index: 1;

  animation: move 1s alternate infinite, disapear 10s forwards;

  @keyframes move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-18px);
    }
  }

  @keyframes disapear {
    0% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const NavWhatsappButton = styled.button<AnimatedElementInterface>`
  top: calc(100vh - 72px);
  right: 40px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 55px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.green.dark};
  border: none;
  cursor: pointer;
  z-index: 1;

  path {
    fill: white;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.green.main};
  }

  @media ${devices.mobileM} {
    right: 20px;
  }
`
