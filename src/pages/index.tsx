import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Container } from '../styles/pages/Home'
import { HeadlineOne } from '../components/Typography'
import Parallax from '../components/Parallax'
import Nav from '../components/Nav'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Vrownie</title>
      </Head>
      <Nav />
    </Container>
  )
}

export default Home
