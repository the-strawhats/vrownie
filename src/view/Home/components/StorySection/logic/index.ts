import { useRef, useEffect, useState } from 'react'
import composer from '../../../../../utils/composer'

const useCard = () => {
  const storySectionContainerRef = useRef<HTMLElement | null>()
  const [isAnimated, setisAnimated] = useState<boolean>(false)

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.50
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
    observer.observe(storySectionContainerRef.current)
  }, [])

  return {
    storySectionContainerRef,
    isAnimated
  }
}

export default composer(useCard)
