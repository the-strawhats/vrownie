import React from 'react'
import Card from '../../../../components/Card'
import { BodyOne, HeadlineTwo } from '../../../../components/Typography'
import { ProductsSectionContainer, ProductsContent } from './style'
import enhancer from './logic'
import Image from '../../../../components/Image'

interface ProductsSectionInterface {
  browniesMock: Array<{
    title: string
    description: string
    price: number
  }>
}

const ProductsSection: React.FC<ProductsSectionInterface> = ({
  browniesMock
}) => {
  return (
    <ProductsSectionContainer>
      <Image src="/productSectionBackground.png" height={841} width={1440} />
      <HeadlineTwo>
        Nossos brownies<span className="red">.</span>
      </HeadlineTwo>
      <BodyOne>
        Trabalhamos com ingredientes de respeito, livres de qualquer tipo de
        exploração, humana ou animal.
      </BodyOne>
      <ProductsContent>
        {browniesMock.map(({ title, price, description }, idx) => (
          <Card
            key={idx}
            title={title}
            price={price}
            description={description}
            transitionDuration={idx * 0.35}
          />
        ))}
      </ProductsContent>
    </ProductsSectionContainer>
  )
}

export default enhancer(ProductsSection)
