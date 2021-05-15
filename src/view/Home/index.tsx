import React from 'react'
import Hero from './components/Hero'
import { Container } from '../../styles/global'

interface HomeInterface {}

const Home: React.FC<HomeInterface> = ({}) => {
  return (
    <Container>
      <Hero />
    </Container>
  )
}

export default Home
