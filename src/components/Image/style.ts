import styled from 'styled-components'

interface ImageWrapperInterface {
  height?: number
  width?: number
}

export const ImageWrapper = styled.div<ImageWrapperInterface>`
  position: relative;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
`
