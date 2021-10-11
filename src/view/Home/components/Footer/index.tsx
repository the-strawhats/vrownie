import React from 'react'
import Icon from '@components/Icon'
import { FooterContainer, FooterMedias } from './style'
import Image from '@components/Image'

interface FooterInterface {}

const Footer: React.FC<FooterInterface> = ({}) => {
  return (
    <FooterContainer>
      <Image
        src="/vrownie.png"
        width={1772}
        height={846}
        containerX={130}
        containerY={62}
      />
      <FooterMedias>
        <Icon id="instagram" height={32} width={32} />
        <Icon id="whatsapp" height={32} width={32} />
        <Icon id="facebook" height={32} width={32} />
      </FooterMedias>
    </FooterContainer>
  )
}

export default Footer
