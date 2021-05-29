import Head from 'next/head'
import React from 'react'
import HomeView from '../view/Home'
import Nav from '../components/Nav'
import styled from 'styled-components'

const HomeWrapper = styled.div` 
  overflow: hidden;
`

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Head>
        <title>Vrownie</title>
      </Head>
      <Nav />
      <HomeView />
    </HomeWrapper>
  )
}

export default Home
