import styled from 'styled-components'
import { IconContainer } from '../Icon/style'
import { ImageWrapper } from '../Image/style'
import { BodyOne } from '../Typography'
import { devices } from '../../constants/devices'

interface NavShopButtonInterface {
  isDown: boolean
}

export const NavContainer = styled.nav`
  position: relative;
  display: flex;
  padding: 40px;
  align-items: center;

  > ${ImageWrapper} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    @media ${devices.mobileM} {
      width: 100px;
      height: 47px;
    }
  }

  @media ${devices.mobileM} {
    padding: 24px;
  }
`
export const Navlist = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > ${IconContainer} {
    margin-right: 75px;

    @media ${devices.laptop} {
      margin-right: 24px;
    }

    @media ${devices.mobileM} {
      width: 32px;
      height: 32px;
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

      > ${BodyOne} {
        transition: all ease 0.3s;
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

export const NavShopButton = styled.button<NavShopButtonInterface>`
  top: ${({ isDown }) => (isDown ? 'calc(100vh - 116px)' : '40px')};
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
  transition-property: top, background-color;
  transition-timing-function: ease;
  transition-duration: 0.8s, 0.3s;
  transition-delay: 400ms, 0s;

  :hover {
    background-color: ${({ theme }) => theme.colors.green.main};
  }

  @media ${devices.mobileL} {
    height: 40px;
    width: 40px;
    > ${IconContainer} {
      height: 13px;
      width: 13px;
    }
  }

  @media ${devices.mobileM} {
    top: ${({ isDown }) => (isDown ? 'calc(100vh - 120px)' : '24px')};
    right: 20px;
  }
`
