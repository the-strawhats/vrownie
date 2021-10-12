import { getStorageItem } from '@utils/index'
import { useRef, useEffect, useState } from 'react'
import composer from '@utils/composer'
import { CartItem } from '@interface/index'

const useNavbar = () => {
  const navRef = useRef<HTMLElement | null>()
  const [isAnimated, setisAnimated] = useState<boolean>(false)
  const [isCartActive, setIsCartActive] = useState<boolean>(false)
  const [cartAmount, setCartAmount] = useState<Number>(0)

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.75
  }

  const callBack = (e: IntersectionObserverEntry[]) => {
    const isStoreVisible = e[0].isIntersecting
    setisAnimated(!isStoreVisible)
  }

  const getCartItemAmount = () => {
    const cartList: Array<CartItem> = getStorageItem('cart')

    if (cartList) {
      const cartItemAmount = cartList.reduce((acc, cur) => {
        return acc + cur.amount
      }, 0)

      if (cartList.length > 0) {
        setIsCartActive(true)
      }

      setCartAmount(cartItemAmount)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options)
    observer.observe(navRef.current)

    getCartItemAmount()

    window.addEventListener('storage', () => {
      setIsCartActive(true)
      getCartItemAmount()
    })
  }, [])

  return {
    navRef,
    isAnimated,
    isCartActive,
    cartAmount
  }
}

export default composer(useNavbar)
