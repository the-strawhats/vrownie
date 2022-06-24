import Head from 'next/head'
import React from 'react'
import HomeView from '@view/Home'
import Nav from '@components/Nav'
import styled from 'styled-components'
import { GraphCMS } from 'src/services/products'

const HomeWrapper = styled.div`
  overflow: hidden;
`

const Home = ({products}) => {
  return (
    <>
      <Head>
        <title>Vrownie</title>
      </Head>
      <HomeWrapper>
        <Nav />
        <HomeView products={products} />
      </HomeWrapper>
    </>
  )
}

export async function getServerSideProps(context) {
  const api = new GraphCMS()
  const products = await api.load()
  return {
    props: { products }, 
  }
}

export default Home
