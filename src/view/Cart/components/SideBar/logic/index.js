import composer from '@utils/composer'
import { getStorageItem, cartListToOrder } from '@utils/index'

const useSidebar = () => {
  const handleOrderNow = () => {
    const cartList = getStorageItem('cart')
    const orderText = cartListToOrder(cartList)
    window.open(
      `https://api.whatsapp.com/send?phone=5511967389394&text=${orderText}`
    )
  }
  return {
    handleOrderNow
  }
}

export default composer(useSidebar)
