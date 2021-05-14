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
  padding: 20px 40px 40px;
  align-items: center;

  > ${ImageWrapper} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    @media ${devices.laptop} {
      width: 100px;
      height: 47px;
    }
  }

  @media ${devices.laptop} {
    padding: 20px 24px 24px;
  }
`
export const Navlist = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > ${IconContainer} {
    margin-right: 75px;

    @media ${devices.laptop} {
      width: 24px;
      height: 24px;
      margin: 0px;
    }
  }

  > ul {
    display: flex;
    list-style: none;

    > li {
      margin-right: 40px;
      cursor: pointer;

      > ${BodyOne} {
        transition: all ease 0.3s;
        :hover {
          color: ${({ theme }) => theme.colors.green.dark};
        }
      }
    }

    @media ${devices.laptop} {
      display: none;
    }
  }
`

export const NavShopButton = styled.button<NavShopButtonInterface>`
  top: ${({ isDown }) => (isDown ? 'calc(100vh - 116px)' : '20px')};
  right: 40px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
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

  @media ${devices.tablet} {
    right: 20px;
    height: 40px;
    width: 40px;

    > ${IconContainer} {
      height: 13px;
      width: 13px;
    }
  }
`
