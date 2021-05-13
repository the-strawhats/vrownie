import { useEffect, useRef } from 'react'
import composer from '../../../utils/composer'

const useParallax = () => {
  const parallaxContainerRef = useRef<HTMLElement | null>(null)

  const parallaxEffect = (e: globalThis.MouseEvent) => {
    document.querySelectorAll('.layer').forEach((element: HTMLElement) => {
      const speedValue = element.getAttribute('data-speed')
      const x = (e.clientX * ~~speedValue) / 230
      const y = (e.clientY * ~~speedValue) / 230

      element.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  }

  useEffect(() => {
    parallaxContainerRef.current.addEventListener('mousemove', parallaxEffect)
  }, [parallaxContainerRef])

  return {
    parallaxContainerRef
  }
}

export default composer(useParallax)
