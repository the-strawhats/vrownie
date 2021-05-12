import React from 'react'
import Image from 'next/image'
import { ParallaxContainer } from './style'
import enhancer from './logic/index'

interface ParallaxInterface {
  parallaxEffect: (e: React.MouseEvent<HTMLInputElement>) => null
  parallaxContainerRef: () => null
}

const Parallax: React.FC<ParallaxInterface> = ({
  parallaxEffect,
  parallaxContainerRef
}) => {
  return (
    <ParallaxContainer ref={parallaxContainerRef}>
      <Image
        data-speed="1.5"
        className="layer"
        src="/heroBrownie.png"
        height={629}
        width={445}
      />
      <Image
        data-speed="9"
        className="layer"
        src="/chocolateOne.png"
        height={111}
        width={125}
        objectFit="contain"
      />
      <Image
        data-speed="-2"
        className="layer"
        src="/chocolateTwo.png"
        height={122}
        width={114}
        objectFit="contain"
      />
      <Image
        data-speed="2"
        className="layer"
        src="/chocolateThree.png"
        height={101}
        width={121}
        objectFit="contain"
      />
      <Image
        data-speed="1.5"
        className="layer"
        src="/chocolateFour.png"
        height={55}
        width={79}
        objectFit="contain"
      />
      <Image
        data-speed="-2"
        className="layer"
        src="/chocolateFive.png"
        height={123}
        width={164}
        objectFit="contain"
      />
      <Image
        data-speed="-5"
        className="layer"
        src="/chocolateSix.png"
        height={114}
        width={101}
        objectFit="contain"
      />
      <Image
        data-speed="4"
        className="layer"
        src="/chocolateSeven.png"
        height={102}
        width={114}
        objectFit="contain"
      />
    </ParallaxContainer>
  )
}

export default enhancer(Parallax)
