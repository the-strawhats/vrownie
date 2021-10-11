import { useEffect, useState } from 'react'
import composer from '@utils/composer'
import { getStorageItem, numberToCurrency } from '@utils/index'

interface SingleOrderInterface {
  name: String
  price: number
  url: String
  amount: number
}

const useOrder = () => {
  const [cartList, setCartList] = useState<Array<SingleOrderInterface>>([])

  const totalValue = cartList.reduce(
    (acc: number, cur: SingleOrderInterface) => {
      return acc +( cur.price * cur.amount)
    },
    0
  )

  useEffect(() => {
    setCartList(getStorageItem('cart'))
  }, [])

  return {
    cartList,
    finalValue: numberToCurrency(totalValue)
  }
}

export default composer(useOrder)
