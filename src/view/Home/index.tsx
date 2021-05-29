import React from 'react'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import StorySection from './components/StorySection'
import { Container } from '../../styles/global'

interface HomeInterface {}

const Home: React.FC<HomeInterface> = ({}) => {
  return (
    <Container>
      <Hero />
      <ProductsSection />
      <StorySection />
    </Container>
  )
}

export default Home
