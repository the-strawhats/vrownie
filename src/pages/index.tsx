import Head from 'next/head'
import React from 'react'
import { Container } from '../styles/pages/Home'
import { HeadlineOne } from '../components/Typography'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Typeboiler</title>
      </Head>

      <HeadlineOne> Hello world </HeadlineOne>
    </Container>
  )
}

export default Home
