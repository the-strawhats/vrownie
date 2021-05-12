import styled from 'styled-components'

export const ParallaxContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 661px;
  height: 465px;

  > div {
    position: static !important;

    :first-child {
      z-index: 100;
    }
  }
`
