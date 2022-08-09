import React from 'react'
import { HeroContainer, HeroTextContent, HeroImageContent } from './style'
import Parallax from '@components/Parallax'
import { HeadlineOne, Paragraph } from '@components/Typography'
import Button from '@components/Button'
import Icon from '@components/Icon'
import Image from '@components/Image'
import { scrollIntoView } from '@utils/index'

const Hero = () => {
  return (
    <HeroContainer>
      <Icon id="heroBackground" height={900} width={616} />
      <Image src="/heroBackgroundMobile.png" height={2970} width={1668} />
      <HeroTextContent>
        <HeadlineOne>
          Brownies <span className="green">veganos</span> de respeito
        </HeadlineOne>
        <Paragraph>
          Veganismo não é sinônimo de algo sem sabor, como muitos pensam, mas um
          leque de possibilidades!
        </Paragraph>
        <Button
          label="Pedir agora!"
          onClick={() => scrollIntoView('products')}
        />
      </HeroTextContent>
      <HeroImageContent>
        <Parallax />
      </HeroImageContent>
    </HeroContainer>
  )
}

export default Hero
