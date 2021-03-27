import Head from 'next/head'
import React from 'react'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container >
      <Head>
        <title>Typeboiler</title>
      </Head>

      <main>
      <h1>🤘 Hello world 🤘</h1>
      </main>
    </Container>
  )
}

export default Home
