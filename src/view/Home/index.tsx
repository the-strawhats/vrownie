import React from 'react'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import StorySection from './components/StorySection'
import Footer from './components/Footer'
import { Container } from '@styles/global'

const Home = ({products}) => {
  return (
    <Container>
      <Hero />
      <ProductsSection products={products}/>
      <StorySection />
      <Footer />
    </Container>
  )
}

export default Home
