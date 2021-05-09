import React from 'react'
import Image from 'next/image'
import { ImageWrapper } from './style'

interface ImageInterface {
  src: string
  height?: number
  width?: number
  alt?: string
}

const ImageComponent: React.FC<ImageInterface> = ({
  src,
  height,
  width,
  alt
}) => {
  return (
    <ImageWrapper height={height} width={width}>
      <Image src={src} alt={alt} layout="fill" objectFit='fill'/>
    </ImageWrapper>
  )
}

export default ImageComponent
