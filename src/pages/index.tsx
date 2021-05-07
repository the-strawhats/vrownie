import Head from 'next/head'
import React from 'react'
import { Container } from '../styles/pages/Home'
import { HeadlineOne } from '../components/Typography'
import Button from '../components/Button'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Vrownie</title>
      </Head>

      <HeadlineOne>
        {' '}
        Brownies <span className="green">veganos</span> de respeito
        <span className="red">.</span>{' '}
      </HeadlineOne>
      <Button label='Pedir agora!' />
    </Container>
  )
}

export default Home
