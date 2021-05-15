import Head from 'next/head'
import React from 'react'
import HomeView from '../view/Home'
import Nav from '../components/Nav'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Vrownie</title>
      </Head>
      <Nav />
      <HomeView />
    </>
  )
}

export default Home
