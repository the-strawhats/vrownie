import React from 'react'
import Card from '../../../../components/Card'
import { BodyOne, HeadlineTwo } from '../../../../components/Typography'
import { ProductsSectionContainer, ProductsContent } from './style'

interface ProductsSectionInterface {}

const ProductsSection: React.FC<ProductsSectionInterface> = ({}) => {
  return (
    <ProductsSectionContainer>
      <HeadlineTwo>
        Nossos brownies<span className="red">.</span>
      </HeadlineTwo>
      <BodyOne>
        Trabalhamos com ingredientes de respeito, livres de qualquer tipo de
        exploração, humana ou animal.
      </BodyOne>
      <ProductsContent>
        <Card title="Tradicional" price={12} />
        <Card title="Tradicional" price={12} />
        <Card title="Tradicional" price={12} />
        <Card title="Tradicional" price={12} />
        <Card title="Tradicional" price={12} />
        <Card title="Tradicional" price={12} />
      </ProductsContent>
    </ProductsSectionContainer>
  )
}

export default ProductsSection
