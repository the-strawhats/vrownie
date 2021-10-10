import { useEffect, useState } from 'react'
import composer from '../../../../../utils/composer'
import { getStorageItem } from '../../../../../utils/index'

const useOrder = () => {
  const [cartList, setCartList] = useState<Array<Object>>([])

  useEffect(() => {
    setCartList(getStorageItem('cart'))
  }, [])

  return {
    cartList
  }
}

export default composer(useOrder)
