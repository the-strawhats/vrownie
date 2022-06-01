import React from 'react'
import Card from '@components/Card'
import { Paragraph, HeadlineTwo } from '@components/Typography'
import { ProductsSectionContainer, ProductsContent } from './style'
import enhancer from './logic'
import Image from '@components/Image'
import Icon from '@components/Icon'
import { CartItem } from '@interface/index'

interface ProductsSectionInterface {
  browniesMock: Array<CartItem>
}

const ProductsSection: React.FC<ProductsSectionInterface> = ({
  browniesMock
}) => {
  return (
    <ProductsSectionContainer id="products">
      <Icon id="productsBackgroundOne" height={363} width={83} />
      <Icon id="productsBackgroundTwo" height={193} width={89} />
      <Icon id="productsBackgroundOne" height={363} width={83} />

      <Image src="/productSectionBackground.png" height={841} width={1440} />
      <HeadlineTwo>
        Nossos brownies<span className="red">.</span>
      </HeadlineTwo>
      <Paragraph>
        Trabalhamos com ingredientes de respeito, livres de qualquer tipo de
        exploração, humana ou animal.
      </Paragraph>
      <ProductsContent>
        {browniesMock.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </ProductsContent>
    </ProductsSectionContainer>
  )
}

export default enhancer(ProductsSection)
