import styled from 'styled-components'
import { IconContainer } from '../Icon/style'
import { ImageWrapper } from '../Image/style'
import { BodyOne } from '../Typography'

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
  }
`
export const Navlist = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > ${IconContainer} {
    margin-right: 75px;
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
  }
`

export const NavShopButton = styled.button<NavShopButtonInterface>`
  top: ${({ isDown }) => (isDown ? 'calc(100vh - 116px)' : '20px')};
  right: 40px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.green.dark};
  border: none;
  cursor: pointer;
  transition: all ease-in-out 0.8s;

  :hover {
    background-color: ${({ theme }) => theme.colors.green.main};
  }
`
