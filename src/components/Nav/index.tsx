import React from 'react'
import {
  NavContainer,
  Navlist,
  NavShopButton,
  NavShopButtonContent,
  IconActionWrapper,
  LogoActionWrapper
} from './style'
import Icon from '../Icon'
import { BodyOne } from '../Typography'
import Image from '../Image'
import enhancer from './logic/index'
import Link from 'next/link'
import { scrollIntoView } from '@utils/index'

interface NavInterface {
  navRef: () => void
  isAnimated: boolean
  isCartActive: boolean
  cartAmount: number
  disabledCart: boolean
}

const Nav: React.FC<NavInterface> = ({
  navRef,
  isAnimated = true,
  isCartActive,
  cartAmount,
  disabledCart = false
}) => {
  return (
    <NavContainer isAnimated={isAnimated} ref={navRef}>
      <Navlist isAnimated={isAnimated}>
        <Link href="/">
          <IconActionWrapper>
            <Icon id="vegan" height={40} width={40} />
          </IconActionWrapper>
        </Link>
        {!disabledCart && (
          <ul>
            <li>
              <BodyOne
                onClick={() => scrollIntoView('products')}
                fontSize={22}
                weigth="medium"
              >
                Produtos
              </BodyOne>
            </li>
            <li>
              <BodyOne
                fontSize={22}
                weigth="medium"
                onClick={() => scrollIntoView('story')}
              >
                Sobre
              </BodyOne>
            </li>
          </ul>
        )}
      </Navlist>
      <Link href="/">
        <LogoActionWrapper>
          <Image
            src="/vrownie.png"
            width={1772}
            height={846}
            containerX={160}
            containerY={76}
          />
        </LogoActionWrapper>
      </Link>
      {!disabledCart && (
        <Link href="/carrinho">
          <NavShopButton isAnimated={isAnimated} isCartActive={isCartActive}>
            <NavShopButtonContent
              isCartActive={isCartActive}
              cartAmount={cartAmount}
            >
              <Icon id="shop" height={20} width={20} />
            </NavShopButtonContent>
          </NavShopButton>
        </Link>
      )}
    </NavContainer>
  )
}

export default enhancer(Nav)
