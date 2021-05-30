import styled, { keyframes } from 'styled-components'

const parallaxAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const ParallaxContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 661px;
  height: 465px;
  animation-name: ${parallaxAnimation};
  animation-duration: 1.8s;

  > div {
    position: static !important;

    :first-child {
      z-index: 100;
    }
  }
`
