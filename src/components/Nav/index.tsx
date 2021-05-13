import React from 'react'
import { NavContainer, Navlist, NavShopButton } from './style'
import Icon from '../Icon'
import { BodyOne } from '../Typography'
import Image from '../Image'

const Nav: React.FC = ({}) => {
  return (
    <NavContainer>
      <Navlist>
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
        containerX={140}
        containerY={67}
      />
      <NavShopButton>
        <Icon id="shop" height={20} width={20} />
      </NavShopButton>
    </NavContainer>
  )
}

export default Nav
