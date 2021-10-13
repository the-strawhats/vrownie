import React from 'react'
import { BodyOne, HeadlineTwo } from '@components/Typography'
import { StorySectionContainer, StorySectionText } from './style'
import Image from '@components/Image'
import enhancer from './logic'

interface StorySectionInterface {
  storySectionContainerRef: () => null
  isAnimated: boolean
}

const StorySection: React.FC<StorySectionInterface> = ({
  storySectionContainerRef,
  isAnimated
}) => {
  return (
    <StorySectionContainer
      id="story"
      isAnimated={isAnimated}
      ref={storySectionContainerRef}
    >
      <HeadlineTwo>
        Nossa história<span className="red">.</span>
      </HeadlineTwo>
      <Image src="/us.png" height={450} width={450} />
      <StorySectionText isAnimated={isAnimated}>
        <BodyOne>
          Nós somos Enzo e Samara, um casal vegetariano em transição para o
          veganismo. Entre nossos muitos hobbies está a culinária, que desde o
          início nos ajudou a provar os sabores que a cozinha vegetariana pode
          oferecer. Em nossas experimentações, chegamos à receita de um brownie
          totalmente vegano e com um sabor surpreendente! E, assim, com a
          proposta de fazer com que veganismo chegue a mais pessoas como algo
          saboroso e que pode ser ainda melhor do que a comida com ingredientes
          de origem animal.
        </BodyOne>
      </StorySectionText>
    </StorySectionContainer>
  )
}

export default enhancer(StorySection)
