import composer from '@utils/composer'
import { getStorageItem, cartListToOrder } from '@utils/index'
import { useState } from 'react'

const useSidebar = () => {
  const [currentOption, setCurrentOption] = useState('')
  const handleOrderNow = () => {
    const cartList = getStorageItem('cart')
    const orderText = cartListToOrder(cartList)
    window.open(
      `https://api.whatsapp.com/send?phone=5511967389394&text=${orderText}`
    )
  }
  return {
    handleOrderNow,
    currentOption,
    setCurrentOption
  }
}

export default composer(useSidebar)
