import { Container } from '@styles/global'
import SideBar from './components/SideBar'
import Order from './components/Order'

const CartView = () => {
  return (
    <Container>
      <Order />
      <SideBar />
    </Container>
  )
}

export default CartView
