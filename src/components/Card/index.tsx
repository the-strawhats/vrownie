import React from 'react'
import {
  CardContainer,
  CardInformationWrapper,
  CardTextWrapper,
  CardButton
} from './style'
import Image from '../Image'
import { Caption, CardPrice, CardTitle } from '../Typography'

interface CardInterface {
  title: string
  description?: string
  price: number
}

const Card: React.FC<CardInterface> = ({ title, price, description }) => {
  return (
    <CardContainer>
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

export default Card
