import { useRef, useEffect, useState } from 'react'
import { addToCart } from '@utils/index'
import { CartItem } from '@interface/index'
import composer from '@utils/composer'

const useCard = () => {
  const cardRef = useRef<HTMLElement | null>()
  const [isAnimated, setisAnimated] = useState<boolean>(false)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const handleCardClick = (data: CartItem) => {
    if (isLoaded) {
      addToCart(data)
    }
  }

  useEffect(() => {
    setIsLoaded(true)
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.85
    }

    const callBack = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0]
      const isStoreVisible = entry.isIntersecting
      setisAnimated(isStoreVisible)
      if (isStoreVisible) {
        observer.unobserve(entry.target)
      }
    }

    const observer = new IntersectionObserver(callBack, options)
    observer.observe(cardRef.current)
  }, [])

  return {
    cardRef,
    isAnimated,
    handleCardClick
  }
}

export default composer(useCard)
