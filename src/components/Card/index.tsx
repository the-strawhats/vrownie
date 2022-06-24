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
import { formatCurrency } from '@utils/format'

interface CardInterface {
  name: string
  price: number
  imageUrl?: string
  cardRef: () => void
  isAnimated: boolean
  description?: string
  transitionDuration?: number
  handleCardClick: (data: CartItem) => void
}

const Card: React.FC<CardInterface> = ({
  name,
  imageUrl,
  price,
  description,
  cardRef,
  isAnimated = true,
  handleCardClick
}) => {
  const [digitsBeforeComma, digitsAfterComma] = formatCurrency(price).split(',')
  return (
    <CardContainer ref={cardRef} isAnimated={isAnimated}>
      {imageUrl && <Image
        src={imageUrl}
        alt={description}
        width={125}
        height={75}
      />}
      <CardInformationWrapper>
        <CardTextWrapper>
          <CardTitle color="black">
            {name}
            <span className="red">.</span>
          </CardTitle>
          {description && <Caption color="gray">{description}</Caption>}

          <CardPrice color="green" variant="dark">
            {digitsBeforeComma}
            <span className="red">.</span>
            {digitsAfterComma}
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
