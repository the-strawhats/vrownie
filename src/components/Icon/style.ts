import styled from 'styled-components'

interface IconContainerInterface {
  height?: number
  width?: number
}

export const IconContainer = styled.div<IconContainerInterface>`
  display: flex;
  align-items: center;
  transition: all ease 0.3s;

  svg {
    height: ${({ height = 24 }) => `${height}px`};
    width: ${({ width = 24 }) => `${width}px`};
  }
`
