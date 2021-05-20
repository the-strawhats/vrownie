import { useRef, useEffect, useState } from 'react'
import composer from '../../../utils/composer'

const useCard = () => {
  const cardRef = useRef<HTMLElement | null>()
  const [isAnimated, setisAnimated] = useState<boolean>(false)

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9,
  }


  const callBack = (e: IntersectionObserverEntry[]) => {
    const isStoreVisible = e[0].isIntersecting
    setisAnimated(isStoreVisible)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options)
    observer.observe(cardRef.current)
  }, [])

  return {
    cardRef,
    isAnimated,
  }
}

export default composer(useCard)
