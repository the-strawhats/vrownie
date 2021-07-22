import React from 'react'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import StorySection from './components/StorySection'
import Footer from './components/Footer'
import { Container } from '../../styles/global'

const Home = () => {
  return (
    <Container>
      <Hero />
      <ProductsSection />
      <StorySection />
      <Footer />
    </Container>
  )
}

export default Home
