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

        {/* Waiting for the current Facebook url or other link  */}
        <AnchorCask href="https://web.facebook.com/vrownievegano/?_rdc=1&_rdr">
          <Icon id="facebook" height={32} width={32} />
        </AnchorCask>
      </FooterMedias>
    </FooterContainer>
  )
}

export default Footer
