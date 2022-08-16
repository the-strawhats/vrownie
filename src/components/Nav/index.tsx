import React from 'react'
import {
  NavContainer,
  Navlist,
  NavShopButton,
  NavShopButtonContent,
  IconActionWrapper,
  LogoActionWrapper,
  NavWhatsappButton,
  NavWhatsappButtonTooltip
} from './style'
import Icon from '@components/Icon'
import { Paragraph } from '@components/Typography'
import Image from '@components/Image'
import enhancer from './logic/index'
import Link from 'next/link'
import { scrollIntoView } from '@utils/index'

interface NavInterface {
  navRef: () => void
  isAnimated: boolean
  isCartActive: boolean
  cartAmount: number
  disabledCart: boolean
  askForHelp: () => void
}

const Nav: React.FC<NavInterface> = ({
  navRef,
  isAnimated = true,
  isCartActive,
  cartAmount,
  disabledCart = false,
  askForHelp,
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
              <Paragraph
                onClick={() => scrollIntoView('products')}
                fontSize={22}
                weigth="medium"
              >
                Produtos
              </Paragraph>
            </li>
            <li>
              <Paragraph
                fontSize={22}
                weigth="medium"
                onClick={() => scrollIntoView('story')}
              >
                Sobre
              </Paragraph>
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
      <NavWhatsappButton onClick={askForHelp}>
        <Icon id="whatsapp" height={28} width={28} />
        <NavWhatsappButtonTooltip>Precisa de ajuda? → </NavWhatsappButtonTooltip>
      </NavWhatsappButton>
    </NavContainer>
  )
}

export default enhancer(Nav)
