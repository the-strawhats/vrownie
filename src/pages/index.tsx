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

      <HeadlineOne>
        {' '}
        Brownies <span className="green">veganos</span> de respeito
        <span className="red">.</span>{' '}
      </HeadlineOne>
    </Container>
  )
}

export default Home
