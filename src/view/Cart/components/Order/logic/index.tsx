import { useEffect, useState } from 'react'
import composer from '@utils/composer'
import { getStorageItem } from '@utils/index'
import { CartItem } from '@interface/index'

const useOrder = () => {
  const [cartList, setCartList] = useState<Array<CartItem>>([])
  const [totalValue, setTotalValue] = useState<number>(0)

  const getCartListTotalValue = () => {
    const cartList = getStorageItem('cart') ?? []
    const totalValue = cartList.reduce((acc: number, cur) => {
      return acc + cur.price * cur.amount
    }, 0)
    setTotalValue(totalValue)
  }

  useEffect(() => {
    getCartListTotalValue()
    setCartList(getStorageItem('cart'))
    window.addEventListener('storage', () => {
      getCartListTotalValue()
    })
  }, [])

  return {
    cartList,
    totalValue
  }
}

export default composer(useOrder)
