import React from 'react'
import Icon from '@components/Icon'
import { FooterContainer, FooterMedias, AnchorCask } from './style'
import Image from '@components/Image'

const Footer = () => {
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
        <AnchorCask href="https://www.instagram.com/vrownievegano/">
          <Icon id="instagram" height={32} width={32} />
        </AnchorCask>

        <AnchorCask href="https://api.whatsapp.com/send?phone=5511988256175">
          <Icon id="whatsapp" height={32} width={32} />
        </AnchorCask>
      </FooterMedias>
    </FooterContainer>
  )
}

export default Footer
