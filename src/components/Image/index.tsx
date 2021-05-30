import React from 'react'
import Image from 'next/image'
import { ImageWrapper } from './style'

interface ImageInterface {
  src: string
  height: number
  width: number
  containerX?: number
  containerY?: number
  alt?: string
}

const ImageComponent: React.FC<ImageInterface> = ({
  src,
  height,
  width,
  containerY,
  containerX,
  alt
}) => {
  return (
    <ImageWrapper height={containerY} width={containerX}>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        objectFit="fill"
        priority
      />
    </ImageWrapper>
  )
}

export default ImageComponent
