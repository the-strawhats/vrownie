import Nav from '@components/Nav'
import CartView from '@view/Cart'

const Cart = () => {
  return (
    <>
      <Nav disabledCart={true} />
      <CartView />
    </>
  )
}

export default Cart
