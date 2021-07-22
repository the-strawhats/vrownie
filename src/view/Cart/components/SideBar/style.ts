import styled from 'styled-components'
import { HeadlineThree } from '../../../../components/Typography'

interface SideBarContainerInterface {}

export const SideBarContainer = styled.div<SideBarContainerInterface>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 470px;
  padding-top: 96px;
  background-color: ${({ theme }) => theme.colors.vanilla.light};

  > ${HeadlineThree} {
    margin-bottom: 24px;
  }
`
