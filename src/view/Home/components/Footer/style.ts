import styled from 'styled-components'
import { IconContainer } from '../../../../components/Icon/style'

export const FooterContainer = styled.div`
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FooterMedias = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 0;

  > ${IconContainer} {
    cursor: pointer;
    
    :nth-child(2) {
      margin: 0 56px;
    }
  }
`
