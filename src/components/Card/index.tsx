import React from 'react'
import {
  CardContainer,
  CardInformationWrapper,
  CardTextWrapper,
  CardButton
} from './style'
import Image from '@components/Image'
import { Caption, CardPrice, CardTitle } from '@components/Typography'
import enhancer from './logic'
import { CartItem } from '@interface/index'

interface CardInterface {
  name: string
  price: number
  cardRef: () => void
  isAnimated: boolean
  description?: string
  transitionDuration?: number
  handleCardClick: (data: CartItem) => void
}

const Card: React.FC<CardInterface> = ({
  name,
  price,
  description,
  cardRef,
  isAnimated = true,
  handleCardClick
}) => {
  return (
    <CardContainer ref={cardRef} isAnimated={isAnimated}>
      <Image
        src="/tradicional-brownie.png"
        alt="Picture of a brownie"
        width={125}
        height={75}
      />
      <CardInformationWrapper>
        <CardTextWrapper>
          <CardTitle color="black">
            {name}
            <span className="red">.</span>
          </CardTitle>
          {description && <Caption color="gray">{description}</Caption>}

          <CardPrice color="green" variant="dark">
            ${price}
            <span className="red">.</span>00
          </CardPrice>
        </CardTextWrapper>
        <CardButton onClick={() => handleCardClick({ name, price, url: '' })}>
          +
        </CardButton>
      </CardInformationWrapper>
    </CardContainer>
  )
}

export default enhancer(Card)
