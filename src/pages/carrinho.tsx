import Nav from '@components/Nav'
import CartView from '@view/Cart'
import Head from 'next/head'

const Cart = () => {
  return (
    <>
      <Head>
        <title>Vrownie - Carrinho</title>
      </Head>
      <Nav disabledCart={true} />
      <CartView />
    </>
  )
}

export default Cart
