import React from 'react'
import Image from 'next/image'
import { ParallaxContainer } from './style'
import enhancer from './logic/index'

interface ParallaxInterface {
  parallaxContainerRef: () => null
}

const Parallax: React.FC<ParallaxInterface> = ({ parallaxContainerRef }) => {
  return (
    <ParallaxContainer ref={parallaxContainerRef}>
      <Image
        data-speed="1.5"
        className="layer"
        src="/heroBrownie.png"
        height={445}
        width={629}
      />
      <Image
        data-speed="9"
        className="layer"
        src="/chocolateOne.png"
        height={465}
        width={613}
        objectFit="contain"
      />
      <Image
        data-speed="-2"
        className="layer"
        src="/chocolateTwo.png"
        height={465}
        width={613}
        objectFit="contain"
      />
      <Image
        data-speed="2"
        className="layer"
        src="/chocolateThree.png"
        height={465}
        width={613}
        objectFit="contain"
      />
      <Image
        data-speed="1.5"
        className="layer"
        src="/chocolateFour.png"
        height={465}
        width={613}
        objectFit="contain"
      />
      <Image
        data-speed="-2"
        className="layer"
        src="/chocolateFive.png"
        height={465}
        width={613}
        objectFit="contain"
      />
      <Image
        data-speed="-5"
        className="layer"
        src="/chocolateSix.png"
        height={465}
        width={613}
        objectFit="contain"
      />
      <Image
        data-speed="4"
        className="layer"
        src="/chocolateSeven.png"
        height={465}
        width={613}
        objectFit="contain"
      />
    </ParallaxContainer>
  )
}

export default enhancer(Parallax)
