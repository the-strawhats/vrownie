import React from 'react'
import {
  NavContainer,
  Navlist,
  NavShopButton,
  NavShopButtonContent
} from './style'
import Icon from '../Icon'
import { BodyOne } from '../Typography'
import Image from '../Image'
import enhancer from './logic/index'

interface NavInterface {
  navRef: () => null
  isAnimated: boolean
}

const Nav: React.FC<NavInterface> = ({ navRef, isAnimated = true }) => {
  return (
    <NavContainer isAnimated={isAnimated} ref={navRef}>
      <Navlist isAnimated={isAnimated}>
        <Icon id="vegan" height={40} width={40} />

        <ul>
          <li>
            <BodyOne fontSize={22} weigth="medium">
              Produtos
            </BodyOne>
          </li>
          <li>
            <BodyOne fontSize={22} weigth="medium">
              Sobre
            </BodyOne>
          </li>
          <li>
            <BodyOne fontSize={22} weigth="medium">
              Contato
            </BodyOne>
          </li>
        </ul>
      </Navlist>
      <Image
        src="/vrownie.png"
        width={1772}
        height={846}
        containerX={160}
        containerY={76}
      />
      <NavShopButton isAnimated={isAnimated}>
        <NavShopButtonContent>
          <Icon id="shop" height={20} width={20} />
        </NavShopButtonContent>
      </NavShopButton>
    </NavContainer>
  )
}

export default enhancer(Nav)
