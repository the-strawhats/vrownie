import Head from 'next/head'
import React from 'react'
import HomeView from '@view/Home'
import Nav from '@components/Nav'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  overflow: hidden;
`

const Home = () => {
  return (
    <>
      <Head>
        <title>Vrownie</title>
      </Head>
      <HomeWrapper>
        <Nav />
        <HomeView />
      </HomeWrapper>
    </>
  )
}

export default Home
