import React from 'react'
import Card from '@components/Card'
import { BodyOne, HeadlineTwo } from '@components/Typography'
import { ProductsSectionContainer, ProductsContent } from './style'
import enhancer from './logic'
import Image from '@components/Image'
import Icon from '@components/Icon'

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
      <Icon id="productsBackgroundOne" height={363} width={83} />
      <Icon id="productsBackgroundTwo" height={193} width={89} />
      <Icon id="productsBackgroundOne" height={363} width={83} />

      <Image src="/productSectionBackground.png" height={841} width={1440} />
      <HeadlineTwo>
        Nossos brownies<span className="red">.</span>
      </HeadlineTwo>
      <BodyOne>
        Trabalhamos com ingredientes de respeito, livres de qualquer tipo de
        exploração, humana ou animal.
      </BodyOne>
      <ProductsContent>
        {browniesMock.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </ProductsContent>
    </ProductsSectionContainer>
  )
}

export default enhancer(ProductsSection)
