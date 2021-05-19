import React from 'react'
import Card from '../../../../components/Card'
import { BodyOne, HeadlineTwo } from '../../../../components/Typography'
import { ProductsSectionContainer, ProductsContent } from './style'
import enhancer from './logic'

interface ProductsSectionInterface {
  productsContentRef: () => void
  isAnimated: boolean
}

const ProductsSection: React.FC<ProductsSectionInterface> = ({
  productsContentRef,
  isAnimated
}) => {
  return (
    <ProductsSectionContainer>
      <HeadlineTwo>
        Nossos brownies<span className="red">.</span>
      </HeadlineTwo>
      <BodyOne>
        Trabalhamos com ingredientes de respeito, livres de qualquer tipo de
        exploração, humana ou animal.
      </BodyOne>
      <ProductsContent ref={productsContentRef} isAnimated={isAnimated}>
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

export default enhancer(ProductsSection)
