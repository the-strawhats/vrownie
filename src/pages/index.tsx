import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Container } from '../styles/pages/Home'
import { HeadlineOne } from '../components/Typography'
import Parallax from '../components/Parallax'

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
      <Parallax />
    </Container>
  )
}

export default Home
