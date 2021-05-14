import { useRef, useEffect, useState } from 'react'
import composer from '../../../utils/composer'

const useNavbar = () => {
  const navRef = useRef<HTMLElement | null>()
  const [isStoreDown, setIsStoreDown] = useState<boolean>(true)

  const options = {
    root: null,
    thresholds: 0,
    rootMargin: '0px'
  }

  const callBack = (e: IntersectionObserverEntry[]) => {
    const isStoreVisible = e[0].isIntersecting
    setIsStoreDown(!isStoreVisible)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options)
    observer.observe(navRef.current)
  }, [])

  return {
    navRef,
    isStoreDown
  }
}

export default composer(useNavbar)
