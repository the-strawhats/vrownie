import React from 'react'
import {
  CardContainer,
  CardInformationWrapper,
  CardTextWrapper,
  CardButton
} from './style'
import Image from '../Image'
import { Caption, CardPrice, CardTitle } from '../Typography'
import enhancer from './logic'

interface CardInterface {
  title: string
  price: number
  cardRef: () => void
  isAnimated: boolean
  description?: string
  transitionDuration?: number
}

const Card: React.FC<CardInterface> = ({
  title,
  price,
  description,
  cardRef,
  isAnimated = true,
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
            {title}
            <span className="red">.</span>
          </CardTitle>
          {description && <Caption color="gray">{description}</Caption>}

          <CardPrice color="green" variant="dark">
            ${price}
            <span className="red">.</span>00
          </CardPrice>
        </CardTextWrapper>
        <CardButton>+</CardButton>
      </CardInformationWrapper>
    </CardContainer>
  )
}

export default enhancer(Card)
