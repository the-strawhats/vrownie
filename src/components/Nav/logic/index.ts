import { useRef, useEffect, useState } from 'react'
import composer from '../../../utils/composer'

const useNavbar = () => {
  const navRef = useRef<HTMLElement | null>()
  const [isAnimated, setisAnimated] = useState<boolean>(false)

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.75,
  }

  const callBack = (e: IntersectionObserverEntry[]) => {
    const isStoreVisible = e[0].isIntersecting
    setisAnimated(!isStoreVisible)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options)
    observer.observe(navRef.current)
  }, [])

  return {
    navRef,
    isAnimated,
  }
}

export default composer(useNavbar)
